const {TE, to}              = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Product', {
       stockNo: DataTypes.INTEGER,
       maker  : DataTypes.STRING,
       model  : DataTypes.STRING,
       year   : DataTypes.STRING,
       seats  : DataTypes.INTEGER
  });


  Model.prototype.toWeb = function (pw) {
      let json = this.toJSON();
      return json;
  };

  return Model;
};
