/**
 * Get All models from Model folder
 * Unsure how its works, 
 * As i understand its looping the files except this file and load as model
 * 
 * I use Sequelize as ORM 
 * 
 */
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS);
var db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;