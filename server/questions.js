var mongoose = require('mongoose');

//Questions Schema
var questionSchema = mongoose.Schema({
	id:{
		type:Number,
		require:true
	},
	answer:{
		type:String,
		require:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Questions = module.exports = mongoose.model('Questions', questionSchema);

//Get Questions 
module.exports.getQuestions = function (callback, limit) {
	// body...
	Questions.find(callback).limit(limit);
}

//Add Questions
module.exports.addQuestion = function (question,callback) {
	console.log("model", question)
	Questions.create(question, callback);
}

//Get Questions 
module.exports.getQuestionsById = function (id, callback) {
	Questions.findById(id,callback);
}