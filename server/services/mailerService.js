const nodemailer = require("nodemailer"),
      smtp = require('nodemailer-smtp-transport');

module.exports.sendMail = function(req, res) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    var mailOptions = {
        service: "Gmail",  // sets automatically host, port and connection security settings
        auth: {
            user: "sreddy.0720@gmail.com",
            pass: ""
        }
    };
    console.log(req.body);

    var smtpTransport = nodemailer.createTransport(mailOptions);

    smtpTransport.sendMail({  //email options
        from: "OpenLogix Corporation <sreddy.0720@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
        to: req.body.email, // receiver
        subject: "Survey Email", // subject
        text: "Gift" // body
    }, function(error, response) {  //callback
        if(error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
            return res.status(200).send({"msg": "Success","email":req.body.email });
        }
    });
}