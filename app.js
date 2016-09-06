var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var request = require('request'); 
// var screenshot = require('node-webkit-screenshot');

app.use(bodyParser.json());

/**
 * define static directory for load all assets
 * check the public directory on this project
 */
app.use(express.static('public'));

/**
 * use dotenv for nice setup separate .env file on root
 * use # sign for comment in env file
 */
require('dotenv').config();

/**
 * set up default port
 * process.env.PORT || 3000
 */
app.set('port', process.env.PORT);

// V = Define View Directory Here
app.set('views', './app/views');

/**
 * dunno how to use html engine, so decide to use ejs extension.
 */
app.set('view engine', 'ejs');

/**
 * C = For Controller Here
 * Automatic routing by reading all controller files
 * Check on controller directory in app folder for understanding the flow
 */
fs.readdirSync('./app/controllers').forEach(function (file) {
  if (file.substr(-3) == '.js') {
    route = require('./app/controllers/' + file);
    route.controller(app);
  }
});

/**
 * Below here is my trial error application
 * didn't delete for my documentation'
 * start --- HERE
 */

// ini comment log trial error apps
// var capture = require('capture');
// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);

//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };




app.get('/screenshot', function (req, res) {
  // res.send(process.env.PORT);
  // res.send(req.headers.host);
  var webshot = require('webshot');
  var baseUrl = req.headers.host;

  // res.send(baseUrl);
  webshot(process.env.BASE_URL, 'public/screenshot.png', function (err) {
    // screenshot now saved to google.png
  }, function () {
    res.send('<img src="' + process.env.BASE_URL + '/screenshot.png" />');
    // res.render(process.env.BASE_URL + '/screenshot.png');
    // download(process.env.BASE_URL + 'public/screenshot.png', 'screenshot.png', function(){
    //   console.log('done');
    // });
  })

  // var renderStream = webshot('google.com');
  // var file = fs.createWriteStream('google.png', { encoding: 'binary' });

  // renderStream.on('data', function (data) {
  //   file.write(data.toString('binary'), 'binary');
  // });

  

});

// app.get('/zz', function (req, res) {
//   res.send('Kambing');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

/*
 * its --- ends HERE 
 **/

/**
 * running server with this code
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});