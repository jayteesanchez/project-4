var express  = require('express');
var fs       = require('fs');
var mongoose = require('mongoose');
var passport = require('passport');
var secrets  = require('./config/secrets');

var app = express();

// Find the appropriate database to connect to, default to localhost if not found.
var connect = function() {
  mongoose.connect(secrets.db, function(err, res) {
    if(err) {
      console.log('Error connecting to: ' + secrets.db + '. ' + err);
    }else {
      console.log('Succeeded connected to: ' + secrets.db);
    }
  });
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Source in models
fs.readdirSync(__dirname + '/models').forEach(function(file) {
  if(~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

// Source in passport config
require('./config/passport')(app, passport);

// Source in application settings
require('./config/express')(app, passport);
// Source in routes
require('./config/routes')(app, passport);


app.listen(app.get('port'));
