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
        if (err) {
            if (err) {
                console.log(err.messasge);
                res.status(500).send({ "msg": "Internal Server Eroor!" });
            }
        } else {
            return res.status(200).send({ "msg": "Success", "uid": user._id });
        }
    })
}

module.exports.getUsers = function(req, res) {
    Users.find(function(err, users) {
        if (err) {
            console.log(err);
            res.status(500).send({ "msg": "Internal Server Error" });
        }
        res.status(200).send({ "users": users });
    });
}