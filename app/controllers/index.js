/**
 * This is index controller
 * possible use this file only for handling a map application
 * and care about the routes
 */
module.exports.controller = function (app) {
  app.get('/', function(req, res) {
      res.render('index/index', {baseUrl: process.env.BASE_URL})
  });
  
}