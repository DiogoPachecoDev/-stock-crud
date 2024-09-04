'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entrie.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      Entrie.belongsTo(models.Item, { foreignKey: 'item_id', as: 'item' });
      Entrie.belongsTo(models.Provider, { foreignKey: 'provider_id', as: 'provider' });
    }
  }
  Entrie.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Entrie',
    tableName: 'entries',
    paranoid: true
  });
  return Entrie;
};