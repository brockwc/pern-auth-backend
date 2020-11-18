'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  profile.init({
    user_Id: DataTypes.INTEGER,
    display_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    about_me: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};