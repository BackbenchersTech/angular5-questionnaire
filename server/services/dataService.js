let Questions = require('../db/models/questions');

module.exports.getData = function(req, res) {
    Questions.getQuestions(function(err, questions){
		if(err){
			throw err;
		}
		res.json(questions);
	});
}

module.exports.saveData = function(req, res) {
    let question = req.body;
    Questions.addQuestion(question, function(err, question){
        if(err){
            throw err;
        }
        res.json(question);
    })
}