// requiring/loading all of our dependencies/libaries
var express      = require('express');
var http         = require('http');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var async        = require('async');
var mongoose     = require('mongoose');
var React        = require('react');
var Router       = require('react-router');
var _            = require('underscore');


// start running express, and save the configurations for the express
// "app" with the variable `app`.
var app = express();

// check that MongoD is running...
require('net').connect(27017, 'localhost').on('error', function() {
  console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
  process.exit(0);
});
// load mongoose and connect to a database
mongoose.connect('mongodb://localhost/project-4');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// loading routes defined in the /routes folder
var routes = require('./routes/app');

// DEFINED ROUTES ARE IN HERE >> routes, ie './routes/index'
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


/**
 * Socket.io stuff.
 */
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app
