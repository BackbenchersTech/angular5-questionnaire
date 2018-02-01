const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose');

let api = require('./server/routes/api')

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.HOST);
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