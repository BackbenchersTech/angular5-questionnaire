let Users = require('../db/models/users');

module.exports.saveUser = function(req, res) {
	let user = new Users();

	user.fname = req.body.fname;
	user.lname = req.body.lname;
	user.company = req.body.company;
	user.role = req.body.category;
	user.email = req.body.email;
	user.phone = req.body.phone;

	user.save(function(err) {
		if(err) {
			if(err.name === 'BulkWriteError' && err.code === 11000) {
				return res.status(409).send({"msg" : "Account Exists!"});
			}
			else {
				console.log(err.messasge);
				res.status(500).send({"msg": "Internal Server Eroor!"});
			}
		}
		else {
			return res.status(200).send({"msg": "Success", "uid": user._id});
		}
	})
}

module.exports.getUsers = function(req, res) {
    console.log("Users GET")
}