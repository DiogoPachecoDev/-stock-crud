'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exit.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      Exit.belongsTo(models.Item, { foreignKey: 'item_id', as: 'item' });
    }
  }
  Exit.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exit',
    tableName: 'exits',
    paranoid: true
  });
  return Exit;
};