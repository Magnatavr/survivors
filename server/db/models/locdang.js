const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LocDang extends Model {
    static associate({ Location, Danger}) {
      LocDang.belongsTo(Location, { foreignKey: 'locationId' });
      LocDang.belongsTo(Danger, { foreignKey: 'dangerId' });
    }
  }
  LocDang.init({
    locationId: DataTypes.INTEGER,
    dangerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LocDang',
  });
  return LocDang;
};