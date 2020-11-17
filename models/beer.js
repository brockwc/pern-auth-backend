'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.beer.belongsTo(models.user)
      models.beer.belongsTo(models.brewery)
    }
  };
  beer.init({
    userId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    style: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'beer',
  });
  return beer;
};