const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose');
      var nodemailer = require("nodemailer");
      var smtp = require('nodemailer-smtp-transport');
 
      // var sendgrid = require('sendgrid')(cred.sendgrid_apikey);

let api = require('./server/routes/api')

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(process.env.HOST);
// mongoose.connect('mongodb://localhost/survey');
let db = mongoose.connection;

db.on('error', function(err) {
    console.log("Unable to connect to MongoDB");
    console.log("Error be like: ", err);
});

db.once('open', function() {
    console.log("Connected to DB");

    app.listen(port, function() {
        console.log("App running on port " + port);
    });

    app.use('/api', api);

    // Send all other requests to the Angular app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    })

});


  app.post('/send', function(req, res) {
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
  }, function(error, response){  //callback
     if(error){
         console.log(error);
     }else{
         console.log("Message sent: " + response.message);
         return res.status(200).send({"msg": "Success","email":req.body.email });
     }
     
     });
  });
