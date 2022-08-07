const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

/* ----- IMPORTERING AF QUESTIONS-TABEL ----- */

const dbConfig = require('./config/db-config');
const { Sequelize, Model } = require('sequelize'); 

const sequelize = new Sequelize(
        dbConfig.DATABASE,
        dbConfig.USER,
        dbConfig.PASSWORD,
        {
          host: dbConfig.HOST,
          dialect: dbConfig.DIALECT
        }
    );

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Question = require('./models/questions')(sequelize, Sequelize.DataTypes);

module.exports = db;

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Question = require('./models/questions')(sequelize)
console.log(Question === sequelize.models.Question); //eksport virker

(async () => {
	await db.sequelize.sync().then(() => 
	{
		console.log('Table has been synchronized.');
	}
	).catch((error) => 
	{
		console.log('Synchronization failed: ', error)
	});
	})();

/*----- GET METHODS -----*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/hovedmenu.html");
})

app.get('/hovedmenu', (req, res) => {
  res.sendFile(__dirname + "/hovedmenu.html");
})

app.get('/regler', (req, res) => {
  res.sendFile(__dirname + "/regler.html");
})

app.get('/indstillinger', (req, res) => {
  res.sendFile(__dirname + "/indstillinger.html");
})

app.get('/quiz', (req, res) => {
  res.redirect("/hovedmenu.html");
})

app.get('/game-over', (req, res) => {
  res.sendfile(__dirname + "/game-over.html");
})

/*----- POST METHODS -----*/

app.post('/quiz', (req, res) => {

	for (var i = 0; i < parseInt(req.body.players); i++) {
		if (req.body.player_names[i] === '')
		{
			req.body.player_names[i] = 'Spiller ' + (i+1);
		}
	}

	var allCategoriesOn;
	var selectedCategories = [];
	if (req.body.category_setting === 'all') 
	{
		allCategoriesOn = true;
	}
	else
	{
		allCategoriesOn = false;
		if (Array.isArray(req.body.categories)) 
		{
			selectedCategories = req.body.categories;
		}
		else
		{
			selectedCategories.push(req.body.categories);
		}
	}

	let rawdata = fs.readFileSync('qtest.json');
	let processedData = JSON.parse(rawdata);
	let questionJSON = JSON.stringify(processedData);

	res.render("quiz", {
  	player1: req.body.player_names[0], 
  	player2: req.body.player_names[1],
  	player3: req.body.player_names[2],
  	player4: req.body.player_names[3],
  	allCategoriesOn: allCategoriesOn,
  	selectedCategories: selectedCategories,
  	numberOfPlayers: req.body.players,
  	questionJSON: questionJSON
  });

})

app.post('/game-over', (req, res) => {

	var p3Name, p4Name, p3Lives, p4Lives;
	if (req.body.player_names.length < 3)
	{
		p3Name = p3Lives = p4Name = p4Lives = null;
	}
	else if (req.body.player_names.length < 4)
	{
		p3Name = req.body.player_names[2];
		p3Lives = req.body.player_lives[2];
		p4Name = p4Lives = null;
	}
	else
	{
		p3Name = req.body.player_names[2];
		p3Lives = req.body.player_lives[2];
		p4Name = req.body.player_names[3];
		p4Lives = req.body.player_lives[3];
	}

  res.render("game-over", {
  	player1Name: req.body.player_names[0],
  	player2Name: req.body.player_names[1],
  	player3Name: p3Name, 
  	player4Name: p4Name, 	
  	player1Lives: req.body.player_lives[0],
  	player2Lives: req.body.player_lives[1],
  	player3Lives: p3Lives,
  	player4Lives: p4Lives 	
  });

})

/*----- SETTINGS FUNCTIONS -----*/

function hideCategories()
{
	const categoryList = document.querySelector("#category-list");
	if (!(categoryList.classList.contains("d-none"))){
		categoryList.classList.add("d-none");
	}
}

function showCategories()
{
	const categoryList = document.querySelector("#category-list");
	if (categoryList.classList.contains("d-none")){
		categoryList.classList.remove("d-none");
	}
}

function updatePlayerSettings(players)
{
	var settingsForm = document.querySelector("#settings");
	if (players == 2) 
	{
		document.querySelector("#player-3").classList.add("invisible");
		document.querySelector("#player-4").classList.add("invisible");
	}
	else if (players == 3) 
	{
		document.querySelector("#player-3").classList.remove("invisible");
		document.querySelector("#player-4").classList.add("invisible");
	}
	else if (players == 4) 
	{
		document.querySelector("#player-3").classList.remove("invisible");
		document.querySelector("#player-4").classList.remove("invisible");
	}
	else
	{
		console.log("Invalid number of players. No changes were made.");
	}
}

/* GAMEPLAY FUNCTIONS */

function evaluateAnswer(answerID)
{
	var chosenAnswer = document.querySelector("#" + answerID);
	if (chosenAnswer.classList.contains("correct-answer")) 
	{
		loseLives();
	}
	else
	{
		removeOption(answerID); //her skal der også tælles point op
	}
}

function loseLives()
{
	const currentPlayer = document.querySelector(".active-player");
	console.log(currentPlayer.id.slice(-1));
	const lifePie = currentPlayer.querySelector(".pie");
	var lives = currentPlayer.querySelector(".circle-text");
	var livesToLose = document.querySelectorAll(".visible-option").length - 1;
	console.log(livesToLose);

	var piePercentage = parseInt(getComputedStyle(lifePie).getPropertyValue('--percentage'));

	if (parseInt(lives.textContent) - livesToLose <= 0) 
	{
		lives.textContent = 0;
	}
	else
	{
		lives.textContent = parseInt(lives.textContent) - livesToLose;
	}
	lives.classList.remove("lives");
	lives.classList.add("losing-lives");
	setTimeout(function () {
		lives.classList.remove("losing-lives");
		lives.classList.add("lives");
		}, 700);

	if ((piePercentage + 10*livesToLose) > 100) 
	{
		lifePie.style.setProperty('--percentage', 101);
	}
	else 
	{
		lifePie.style.setProperty('--percentage', piePercentage += 10*livesToLose);
	}

	if (lives.textContent == 0) 
	{
		setTimeout(function () {
			gameOver();
		}, 1000);
	}
	else
	{
		moveOptions( parseInt(currentPlayer.id.slice(-1)) );
		nextPlayersTurn( parseInt(currentPlayer.id.slice(-1)) );
	}
}

function gameOver()
{
	var lifeForm = document.querySelector("#life-form");

	if (document.querySelector("#player-4")) 
	{
		numberOfPlayers = 4;
	}
	else if (document.querySelector("#player-3")) 
	{
		numberOfPlayers = 3;
	}
	else 
	{
		numberOfPlayers = 2;
	}

	for (var i = 1; i <= numberOfPlayers; i++) {
		lifeForm.querySelector("#p" + i + "-name-tracker").value = document.querySelector("#p" + i + "-name").innerHTML;
		lifeForm.querySelector("#p" + i + "-lives-tracker").value = document.querySelector("#p" + i + "-lives").innerHTML;
	}

	lifeForm.submit();
}

function moveOptions(playerNumber)
{

	document.querySelector("#options").classList.add("options-in-motion");
	setTimeout(function () {
		document.querySelector("#options").classList.remove("options-in-motion");
	}, 750);

	if (document.querySelector("#player-4")) //4 spillere
	{

		document.querySelector("#options").classList.remove("option-frame-" + playerNumber + "-of-4");
		document.querySelector("#options").classList.add("option-frame-" + (playerNumber < 4 ? playerNumber + 1 : 1) + "-of-4");

	}
	else if (document.querySelector("#player-3")) //3 spillere
	{
		document.querySelector("#options").classList.remove("option-frame-" + playerNumber + "-of-3");
		document.querySelector("#options").classList.add("option-frame-" + (playerNumber < 3 ? playerNumber + 1 : 1) + "-of-3");
	}
	else //2 spillere
	{

		document.querySelector("#options").classList.remove("option-frame-" + playerNumber + "-of-2");
		document.querySelector("#options").classList.add("option-frame-" + (playerNumber < 2 ? playerNumber + 1 : 1) + "-of-2");

	}

}

function nextPlayersTurn(playerNumber)
{
	var numberOfPlayers = 0;
	if (document.querySelector("#player-4")) 
	{
		numberOfPlayers = 4;
	}
	else if (document.querySelector("#player-3")) 
	{
		numberOfPlayers = 3;
	}
	else 
	{
		numberOfPlayers = 2;
	}

	document.querySelector("#player-" + playerNumber).classList.remove("active-player");
	if (playerNumber < numberOfPlayers) 
	{
		playerNumber += 1;
	}
	else
	{
		playerNumber = 1;
	}
	document.querySelector("#player-" + playerNumber).classList.add("active-player");
	console.log("Next up: Player " + playerNumber + "!");
}

function removeOption(answerID) 
{
	const currentPlayer = document.querySelector(".active-player");
	var chosenAnswer = document.querySelector("#" + answerID);

	chosenAnswer.classList.remove("visible-option");
	chosenAnswer.classList.add("invisible-option");

	// if (document.querySelectorAll(".visible-option").length < 2) 
	// {
	// 	console.log("Time for another question!"); //HER SKAL TILFØJES EN FUNKTION newQuestion();
	// }

	moveOptions( parseInt(currentPlayer.id.slice(-1)) );
	nextPlayersTurn( parseInt(currentPlayer.id.slice(-1)) );
}

/* --------- */

app.listen(port);
