/**
 * Controller For Master Marker
 * require webhost tool for screenshot
 */

var webshot = require('webshot');

module.exports.controller = function (app) {

    /**
     * web yang digunakan untuk mengambil screenshot
     * @return {String} in HTML Code with image url location
     */
    app.get('/screenshot/:origin/:destination', function (req, res) {
        webshot(process.env.BASE_URL + '/screenshot/result/' + req.params.origin + '/' + req.params.destination, 'public/screenshot.png', function (err) {
        }, function () {
            res.send('<img src="' + process.env.BASE_URL + '/screenshot.png" />');
        })
    });

    /**
     * halaman yang digunakan untuk pengambilan screenshot
     * @return {EJS} file for rendering page
     */
    app.get('/screenshot/result/:origin/:destination', function (req, res) {
        console.log(process.env.BASE_URL);
        res.render('screenshot/index', { origin: req.params.origin, destination: req.params.destination })
    });

}