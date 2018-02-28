const nodemailer = require("nodemailer");

module.exports.sendMail = function(req, res) {
    
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PWD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: 'OpenLogix Corporation <'+ process.env.EMAIL_USER +'>',
        to: req.body.email,
        subject: 'IBM Think Booth Survey',
        text: 'Thanks for completing the survey...'
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
            res.status(500).send({"msg": "Internal server error"});
        } 
        else {
            console.log("Message sent: " + info.response);
            res.status(200).send({"msg": "Success..."});
        }
    })
}