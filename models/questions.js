
const { Sequelize, Model, DataTypes } = require('sequelize'); 

module.exports = (sequelize) => {
	const Question = sequelize.define('Question', {
	    question_ID: {
	      type: DataTypes.INTEGER,
	      primaryKey: true,
	      autoIncrement: true
	    },
	    question_text: {
	    	type: DataTypes.STRING(400),
	    	allowNull: false
	    },
	    option_1: {
	    	type: DataTypes.STRING(100),
	    	allowNull: false
	    },
	    option_2: {
	    	type: DataTypes.STRING(100),
	    	allowNull: false
	    },
	    option_3: {
	    	type: DataTypes.STRING(100),
	    	allowNull: false
	    },
	    option_4: {
	    	type: DataTypes.STRING(100),
	    	allowNull: false
	    },
	    correct_answer: {
	    	type: DataTypes.STRING(100),
	    	allowNull: false
	    },
		category : {
			type: DataTypes.ENUM(
				'geografi', 
				'historie', 
				'kreative værker', 
				'krop og helbred', 
				'levende væsener', 
				'mad og drikke', 
				'matematik, fysik og kemi', 
				'politik og samfund', 
				'sport og spil',
				'sprog',
				'teknologi og håndværk', 
				'tro og fantasi'),
			allowNull: false
		},
		category_2 : {
			type: DataTypes.ENUM(
				' ',
				'geografi', 
				'historie', 
				'kreative værker', 
				'krop og helbred', 
				'levende væsener', 
				'mad og drikke', 
				'matematik, fysik og kemi', 
				'politik og samfund', 
				'sport og spil',
				'sprog',
				'teknologi og håndværk', 
				'tro og fantasi'),
			allowNull: false,
			defaultValue: ' '
		},
		createdAt: {
	      type: "DATETIME",
	      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
	      allowNull: false,
	   },
		updatedAt: {
	      type: "TIMESTAMP",
	      defaultValue: sequelize.literal(
	        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
	      ),
	      allowNull: false,
	   }
	  });

	return Question;
};