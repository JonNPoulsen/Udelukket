//måske bør denne fil slettes - opgaverne er uddelegeret til index.js

const Sequelize = require('sequelize'); 

const sequelize = new Sequelize( //https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
        'udelukket', //database
        'root', //Jon?
        'Qcumber',
        {
          host: 'localhost',
          dialect: 'mysql'
        }
    );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Question = require('./questions')(sequelize)

sequelize.sync().then(() => {
console.log('Question table created successfully!');

var rowCount = 0;
Question.count({ //HOW TO RESOLVE??
  where: { question_ID: "1" }
});

var randomNumber = Math.floor(Math.random() * rowCount) + 1;
var randomStr = randomNumber.toString();

console.log(rowCount);

var result = 3;
result = Question.findOne({
    where: {
        question_ID : 1 //SKAL VÆRE randomStr, NÅR DENNE BEREGNES RIGTIGT
    }
}).then(res => {
    console.log(res.dataValues.question_text);
}).catch((error) => {
    console.error('Failed to retrieve data : ', error);
});

}).catch((error) => {
    console.error('Unable to create table : ', error);
});