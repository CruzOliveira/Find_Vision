'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tracking.belongsTo(models.User);
      Tracking.hasMany(models.Product);
    }
  }
  Tracking.init(
    {
      code: DataTypes.STRING,
      local: DataTypes.STRING,
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Tracking',
    },
  );
  return Tracking;
};
