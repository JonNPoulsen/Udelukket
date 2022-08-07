<script>
		var qJSON = JSON.parse($("#question-holder").text());
		console.log(qJSON);
		console.log(qJSON.length);

		var contemplating = new Audio('sounds/contemplating.mp3');
		contemplating.volume = 0.7;
		contemplating.loop = true;
		var lost3Lives = new Audio('sounds/lost-3-lives.mp3');
		$(".music-button").on("click", function () {
			if(contemplating.paused)
			{
				$(".music-button").attr("src","sounds/radio_on.png");
		    	contemplating.play();
		    }
		    else
		    {
		    	$(".music-button").attr("src","sounds/radio_off.png");
		    	contemplating.pause();
				contemplating.currentTime = 0;
		    }
		});

		function newQuestion(idSet) 
		{
			const allCategoriesOn = <%= allCategoriesOn %>;
			console.log(idSet);

			for (var i = 0; i < 4; i++) 
			{
				if ($("#option-" + (i+1)).hasClass("correct-answer"))
				{
					$("#option-" + (i+1)).removeClass("correct-answer")
				}
			}

			if (allCategoriesOn === true){
				newQuestionAllCategories(idSet);
			}
			else
			{
				newQuestionCustomCategories(idSet);
			}
		}

		function newQuestionAllCategories(idSet)
		{
			$.getJSON("qtest.json", function(result){

			//udvælg tilfældigt id
			var id = Math.floor(Math.random() * result.length);

			//vælg om, indtil der vælges et ubrugt id
			while (idSet.has(id)) {
				id = Math.floor(Math.random() * result.length);
			}

			/*tøm listen med brugte id'er, hvis der snart ikke
			er flere ubrugte id'er*/
			if(idSet.size >= result.length - 1){
				idSet.clear();
				idSet.add(id);
			}
			else{
				idSet.add(id);
			}

			$("#question-text").text(result[id].question_text);
			$("#option-1").text(result[id].option_1);
			$("#option-2").text(result[id].option_2);
			$("#option-3").text(result[id].option_3);
			$("#option-4").text(result[id].option_4);

			var options = [ result[id].option_1, result[id].option_2, result[id].option_3, result[id].option_4 ];

			for (i = 0; i < 4; i++) 
			{
				$("#option-" + (i+1)).removeClass("invisible-option").addClass("visible-option");
				if (options[i] === result[id].correct_answer) 
				{
					$("#option-" + (i+1)).addClass("correct-answer");
				}
			}
			});
		}

		function newQuestionCustomCategories(idSet)
		{
			$.getJSON("qtest.json", function(result){

			//udvælg spørgsmål fra de brugervalgte kategorier (bør ikke laves i et gentaget funktionskald...)
			const relevantCategories = <%- JSON.stringify(selectedCategories) %>; 

			var relevantQuestions = [];
			for (var i = 0; i < result.length; i++) {
				if (relevantCategories.includes(result[i].category) || relevantCategories.includes(result[i].category_2)) 
				{
					relevantQuestions.push(result[i]);
				}
			}
			console.log(relevantQuestions);

			//udvælg tilfældigt id
			var id = Math.floor(Math.random() * relevantQuestions.length);

			//vælg om, indtil der vælges et ubrugt id
			while (idSet.has(id)) {
				id = Math.floor(Math.random() * relevantQuestions.length);
			}

			/*tøm listen med brugte id'er, hvis der snart ikke
			er flere ubrugte id'er*/
			if(idSet.size >= relevantQuestions.length - 1){
				idSet.clear();
				idSet.add(id);
			}
			else{
				idSet.add(id);
			}

			$("#question-text").text(relevantQuestions[id].question_text);
			$("#option-1").text(relevantQuestions[id].option_1);
			$("#option-2").text(relevantQuestions[id].option_2);
			$("#option-3").text(relevantQuestions[id].option_3);
			$("#option-4").text(relevantQuestions[id].option_4);

			var options = [ relevantQuestions[id].option_1, relevantQuestions[id].option_2, relevantQuestions[id].option_3, relevantQuestions[id].option_4 ];

			for (i = 0; i < 4; i++) 
			{
				$("#option-" + (i+1)).removeClass("invisible-option").addClass("visible-option");
				if (options[i] === relevantQuestions[id].correct_answer) 
				{
					$("#option-" + (i+1)).addClass("correct-answer");
				}
			}
			});
		}

		var usedIDs = new Set();

		newQuestion(usedIDs);

		$("#option-1").on("click", function () {
			if ($("#option-1").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs);
			}
		})

		$("#option-2").on("click", function () {
			if ($("#option-2").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs);
			}
		})

		$("#option-3").on("click", function () {
			if ($("#option-3").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs);
			}
		})

		$("#option-4").on("click", function () {
			if ($("#option-4").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs);
			}
		})
	</script>