let Users = require('../db/models/users');

module.exports.saveUser = function(req, res) {
	console.log(req);
	var users = req.body;
	console.log("app",users);
	Users.addUsers(users, function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})

}

module.exports.getUsers = function(req, res) {
    Users.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	})
}