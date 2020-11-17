'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brewery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.brewery.belongsTo(models.user);
      models.brewery.hasMany(models.beer)
    }
  };
  brewery.init({
    userId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'brewery',
  });
  return brewery;
};