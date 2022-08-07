<!DOCTYPE html>
<html lang="da">

<head>
	<title>Quiz</title>
	<link rel="stylesheet" type="text/css" href="css/master.css">
	<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body class="page-bg"> <!-- skal senere have klassen loading-screen -->
	<div class="">
		<div class="text-white"> <!-- skal senere have klassen behind-screen -->

			<div class="container">
				<div class="row" style="height:5vh">
				</div>
				<div class="row">
					<div class="col-2"></div>
					<div class="col-8 center-text question-frame">
						<h3 id="question-text" class="question-text"></h3>
					</div>
					<div class="col-2">
						<img class="music-button" src="sounds/radio_off.png">
					</div>
				</div>

			<% if (numberOfPlayers === "2") { %>
				<div class="row">
					<div class="col-2"></div>
					<div class="col-8 d-grid gap-3">
						<div class="row">
							<div class="option-frame col-6 d-grid gap-3" id="options">

								<button onclick="evaluateAnswer('option-1')" type="button" 
								class="answer btn btn-outline-warning btn-lg visible-option" id="option-1">
								</button>

			        			<button onclick="evaluateAnswer('option-2')" type="button" 
			        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-2">
			        			</button>

			        			<button onclick="evaluateAnswer('option-3')" type="button" 
			        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-3">
			        			</button>

			        			<button onclick="evaluateAnswer('option-4')" type="button" 
			        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-4">
			        			</button>

		        			</div>
		        		</div>
					</div>
					<div class="col-2"></div>
				</div>
				<br>
				<hr>
				<div class="row">
					<div class="col-2"></div>

					<div class="col-8">
						<div class="row text-center">
							<div class="col-6">
								<h2 id="p1-name"><%= player1 %></h2>
							</div>
							<div class="col-6">
								<h2 id="p2-name"><%= player2 %></h2>
							</div>
						</div>
					</div>

					<div class="col-2"></div>

				</div>
				<div class="row">
					<div class="col-2"></div>

					<div class="col-8">
						<div class="row text-center">
							<div class="col-6 active-player" id="player-1">
			  					<div id="p1-pie" class="pie" style="--percentage: 0">
			  						<h1 id="p1-lives" class="circle-text lives">10</h1>
			  					</div>
							</div>

							<div class="col-6" id="player-2">
			  					<div id="p2-pie" class="pie" style="--percentage: 0">
			  						<h1 id="p2-lives" class="circle-text lives">10</h1>
			  					</div>
							</div>
						</div>
					</div>

					<div class="col-2"></div>
				</div>
			<% } else if (numberOfPlayers === "3") { %>
					<div class="row">
						<div class=" d-grid gap-3">
							<div class="row">

								<div class="option-frame col-4 d-grid gap-3" id="options">

									<button onclick="evaluateAnswer('option-1')" type="button" 
									class="answer btn btn-outline-warning btn-lg visible-option correct-answer" id="option-1">
									</button>

				        			<button onclick="evaluateAnswer('option-2')" type="button" 
				        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-2">
				        			</button>

				        			<button onclick="evaluateAnswer('option-3')" type="button" 
				        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-3">
				        			</button>

				        			<button onclick="evaluateAnswer('option-4')" type="button" 
				        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-4">
				        			</button>

								</div>
			        		</div>
						</div>
					</div>
					<hr>
				</div>

				<div class="container">
					<div class="row text-center">
						<div class="col">
							<h2 id="p1-name"><%= player1 %></h2>
						</div>
						<div class="col">
							<h2 id="p2-name"><%= player2 %></h2>
						</div>
						<div class="col">
							<h2 id="p3-name"><%= player3 %></h2>
						</div>
					</div>
					<div class="row text-center">

						<div class="col active-player" id="player-1">
		  					<div id="p1-pie" class="pie" style="--percentage: 0">
		  						<h1 id="p1-lives" class="circle-text lives">10</h1>
		  					</div>
						</div>

						<div class="col" id="player-2">
		  					<div id="p2-pie" class="pie" style="--percentage: 0">
		  						<h1 id="p2-lives" class="circle-text lives">10</h1>
		  					</div>
						</div>

						<div class="col" id="player-3">
		  					<div id="p3-pie" class="pie" style="--percentage: 0">
		  						<h1 id="p3-lives" class="circle-text lives">10</h1>
		  					</div>
						</div>

					</div>
			<% } else { %>
						<div class="row">
							<div class=" d-grid gap-3">
								<div class="row">

									<div class="option-frame col-3 d-grid gap-3" id="options">

										<button onclick="evaluateAnswer('option-1')" type="button" 
										class="answer btn btn-outline-warning btn-lg visible-option correct-answer" id="option-1">
										Svarmulighed 1
										</button>

					        			<button onclick="evaluateAnswer('option-2')" type="button" 
					        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-2">
					        			Svarmulighed 2
					        			</button>

					        			<button onclick="evaluateAnswer('option-3')" type="button" 
					        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-3">
					        			Svarmulighed 3
					        			</button>

					        			<button onclick="evaluateAnswer('option-4')" type="button" 
					        			class="answer btn btn-outline-warning btn-lg visible-option" id="option-4">
					        			Svarmulighed 4
					        			</button>
									</div>
				        		</div>
							</div>
						</div>
					<hr>
				</div>

					<div class="container">

						<div class="row text-center">
							<div class="col">
								<h2 id="p1-name"><%= player1 %></h2>
							</div>
							<div class="col">
								<h2 id="p2-name"><%= player2 %></h2>
							</div>
							<div class="col">
								<h2 id="p3-name"><%= player3 %></h2>
							</div>
							<div class="col">
								<h2 id="p4-name"><%= player4 %></h2>
							</div>
						</div>

						<div class="row text-center">

							<div class="col active-player" id="player-1">
			  					<div id="p1-pie" class="pie" style="--percentage: 0">
			  						<h1 id="p1-lives" class="circle-text lives">10</h1>
			  					</div>
							</div>

							<div class="col" id="player-2">
			  					<div id="p2-pie" class="pie" style="--percentage: 0">
			  						<h1 id="p2-lives" class="circle-text lives">10</h1>
			  					</div>
							</div>

							<div class="col" id="player-3">
			  					<div id="p3-pie" class="pie" style="--percentage: 0">
			  						<h1 id="p3-lives" class="circle-text lives">10</h1>
			  					</div>
							</div>

							<div class="col" id="player-4">
			  					<div id="p4-pie" class="pie" style="--percentage: 0">
			  						<h1 id="p4-lives" class="circle-text lives">10</h1>
			  					</div>
							</div>

						</div>
			<% } %>

			</div>
			<form action="/game-over" id="life-form" class="d-none" method="post">
				<input type="text" name="player_names" id="p1-name-tracker">
				<input type="text" name="player_names" id="p2-name-tracker">
				<input type="text" name="player_names" id="p3-name-tracker">
				<input type="text" name="player_names" id="p4-name-tracker">
				<input type="text" name="player_lives" id="p1-lives-tracker">
				<input type="text" name="player_lives" id="p2-lives-tracker">
				<input type="text" name="player_lives" id="p3-lives-tracker">
				<input type="text" name="player_lives" id="p4-lives-tracker">
			</form>

			<div id = "question-holder" class="d-none"><%= questionJSON %></div>
		</div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  	<script type="text/javascript" src="master.js"></script>
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

		function newQuestion(idSet, questions) 
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
				newQuestionAllCategories(idSet, questions);
			}
			else
			{
				newQuestionCustomCategories(idSet, questions);
			}
		}

		function newQuestionAllCategories(idSet, questions)
		{
			//udvælg tilfældigt id
			var id = Math.floor(Math.random() * questions.length);

			//vælg om, indtil der vælges et ubrugt id
			while (idSet.has(id)) {
				id = Math.floor(Math.random() * questions.length);
			}

			/*tøm listen med brugte id'er, hvis der snart ikke
			er flere ubrugte id'er*/
			if(idSet.size >= questions.length - 1){
				idSet.clear();
				idSet.add(id);
			}
			else{
				idSet.add(id);
			}

			$("#question-text").text(questions[id].question_text);
			$("#option-1").text(questions[id].option_1);
			$("#option-2").text(questions[id].option_2);
			$("#option-3").text(questions[id].option_3);
			$("#option-4").text(questions[id].option_4);

			var options = [ questions[id].option_1, questions[id].option_2, questions[id].option_3, questions[id].option_4 ];

			for (i = 0; i < 4; i++) 
			{
				$("#option-" + (i+1)).removeClass("invisible-option").addClass("visible-option");
				if (options[i] === questions[id].correct_answer) 
				{
					$("#option-" + (i+1)).addClass("correct-answer");
				}
			}
		}

		function newQuestionCustomCategories(idSet, questions)
		{
			//udvælg spørgsmål fra de brugervalgte kategorier (bør ikke laves i et gentaget funktionskald...)
			const relevantCategories = <%- JSON.stringify(selectedCategories) %>; 

			var relevantQuestions = [];
			for (var i = 0; i < questions.length; i++) {
				if (relevantCategories.includes(questions[i].category) || relevantCategories.includes(questions[i].category_2)) 
				{
					relevantQuestions.push(questions[i]);
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
		}

		var usedIDs = new Set();

		newQuestion(usedIDs, qJSON);

		$("#option-1").on("click", function () {
			if ($("#option-1").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs, qJSON);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs, qJSON);
			}
		})

		$("#option-2").on("click", function () {
			if ($("#option-2").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs, qJSON);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs, qJSON);
			}
		})

		$("#option-3").on("click", function () {
			if ($("#option-3").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs, qJSON);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs, qJSON);
			}
		})

		$("#option-4").on("click", function () {
			if ($("#option-4").hasClass("correct-answer")) 
			{
				newQuestion(usedIDs, qJSON);
				lost3Lives.play();
			}
			else if ($(".visible-option").length < 2)
			{
				newQuestion(usedIDs, qJSON);
			}
		})
	</script>
</body>
</html>
