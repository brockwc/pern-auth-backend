'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class benefit_tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  benefit_tea.init({
    benefitId: DataTypes.INTEGER,
    teaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'benefit_tea',
  });
  return benefit_tea;
};