/**
 * Can i named it Class Marker model 
 * 
 */

"use strict";

module.exports = function (sequelize, DataTypes) {
  var Marker = sequelize.define("Marker", {
    name: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) { }
      },
      freezeTableName: true
    });

  return Marker;
};