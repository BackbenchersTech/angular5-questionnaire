const nodemailer = require("nodemailer"),
      sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendMail = function(req, res) {
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
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

module.exports.sendGridMail = function(req, res) {
    console.log("asd");
    let msg = {
        to: 'apiedy@open-logix.com',
        from: 'OpenLogix <info@open-logix.com>',
        subject: 'IBM Think Booth Survey',
        text: 'Thanks for completing the survey...',
        html: '<strong>easy</strong>'
    }
    sendgrid.send(msg, function(err, result) {
        if(err) {
            console.log(err)
            res.status(500).send({"msg": "Sorry could not send an email right now"});
        } else {
            res.status(200).send({"msg":"asd"});
        }
    });
}