'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class benefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.benefit.belongsToMany(models.user, {through: 'user_benefit'})
      models.benefit.belongsToMany(models.tea, {through: 'benefit_tea'})

    }
  };
  benefit.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'benefit',
  });
  return benefit;
};