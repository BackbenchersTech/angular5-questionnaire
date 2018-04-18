var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Users Schema
var usersSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    signupTimestamp: {
        type: Date,
        default: Date.now
    }
});

var Users = module.exports = mongoose.model('Users', usersSchema);