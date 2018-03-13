const nodemailer = require("nodemailer"),
      sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
sendgrid.setSubstitutionWrappers('{{', '}}');

module.exports.sendGridMail = function(req, res) {
    console.log(req.body);
    let msg = {
        from: 'OpenLogix <info@open-logix.com>',
        templateId: "8a6cf62f-0326-400b-8b23-6864a4ad08e8",
        to: req.body.email,
        substitutions: {
            name: req.body.name,
            giftCode: req.body.code
        }
    }
    
    sendgrid.send(msg, function(err, result) {
        if(err) {
            console.log(err)
            res.status(500).send({"msg": "Sorry could not send an email right now"});
        } else {
            res.status(200).send({"msg":"Email sent!!"});
        }
    });
}
