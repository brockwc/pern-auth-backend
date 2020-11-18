'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      model.message.hasMany(models.user);
      // ask how to accommodate an association for a message that two users need to access.
    }
  };
  message.init({
    user_a_Id: DataTypes.INTEGER,
    user_b_Id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};