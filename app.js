const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

Users = require('./server/users');
Questions = require('./server/questions')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/survey');
var db = mongoose.connection;

app.get('/',function(req, res){
	res.send('Please use /api/survey');
});

app.get('/api/questions',function(req, res){
	Questions.getQuestions(function(err, questions){
		if(err){
			throw err;
		}
		res.json(questions);
	})

});



app.get('/api/users',function(req, res){
	Users.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})

});

app.get('/api/questions/:_id',function(req, res){
	Questions.getQuestionsById(req.params._id,function(err, question){
		if(err){
			throw err;
		}
		res.json(question);
	})

});

//Post
app.post('/api/users',function(req, res){
	console.log(req);
	var users = req.body;
	console.log("app",users);
	Users.addUsers(users, function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})

});

app.post('/api/questions',function(req, res){
	console.log(req)
	var question = req.body;
	console.log("app",question);
	Questions.addQuestion(question, function(err, question){
		if(err){
			throw err;
		}
		res.json(question);
	})

});

app.listen(3001);
console.log('Runniing on port 3001');