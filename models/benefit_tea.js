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
      models.benefit.belongsTo(models.user, { through: 'user_benefit' }) 
      models.benefit.belongsTo(models.tea, { through: 'benefit_tea' })
    }
  };
  benefit_tea.init({
    benefit_id: DataTypes.INTEGER,
    tea_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'benefit_tea',
  });
  return benefit_tea;
};