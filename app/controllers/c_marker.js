/**
 * Controller For Master Marker
 */

var models = require('../models');

module.exports.controller = function (app) {

    /**
     * save new marker
     * @return (String) 'success' only
     */
    app.post('/marker', function (req, res) {
        models.Marker
            .create(req.body)
            .then(function (m) {
                res.send('success');
            })
    });

    /**
     * get all markers
     * @return {json} with markers list from database
     */
    app.get('/marker', function (req, res) {
        models.Marker.findAll({})
            .then(function (markers) {
                res.send(markers);
                console.log(markers);
            });
    });


    /**
     * update the marker based on id
     * @return {String} with value success only
     */
    app.put('/marker/:id', function (req, res) {

        models.Marker.update({
            name: req.body.name
        }, {where: { 
            id: req.params.id 
        }})
            .then(function (result) {
                console.log(result);
                res.send('success');
            }, function (rejectedPromiseError) {

            });
    });

    /**
     * delete markers based on id
     * @return {String} with value success only
     */
    app.delete('/marker/:id', function (req, res) {
        models.Marker.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.send('success');
            })
    });
}