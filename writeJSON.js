const dbConfig = require('./config/config');
const { Sequelize, Model } = require('sequelize');
const fs = require('fs'); 

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

(async () => {
 	await db.models.Question.findAll()
 	.then(function (data) {
 		return JSON.stringify(data, null, 2);
 	})
 	.then(function (data) {
 		return fs.writeFileSync('qtest.json', data, function(err, result) {
 			if(err) console.log('error', err);
 		});
 	});
 })();