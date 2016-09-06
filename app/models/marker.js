/**
 * Can i named it Class Marker model 
 * 
 */

"use strict";

module.exports = function (sequelize, DataTypes) {
  var marker = sequelize.define("marker", {
    name: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) { }
      },
      freezeTableName: true
    });

  return marker;
};