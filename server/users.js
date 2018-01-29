var mongoose = require('mongoose');

//Users Schema
var usersSchema = mongoose.Schema({
	name:{
		type:String,
		require:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Users = module.exports = mongoose.model('Users', usersSchema);

//Get Users 
module.exports.getUsers = function (callback, limit) {
	// body...
	Users.find(callback).limit(limit);
}

//Add User
module.exports.addUsers = function (users,callback) {
	Users.create(users, callback);
}

