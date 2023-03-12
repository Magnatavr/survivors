const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CountLocDang extends Model {
    static associate({ Country, Location, Danger }) {
      CountLocDang.belongsTo(Country, { foreignKey: 'countryId' });
      CountLocDang.belongsTo(Location, { foreignKey: 'locationId' });
      CountLocDang.belongsTo(Danger, { foreignKey: 'dangerId' });
    }
  }
  CountLocDang.init({
    countryId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    dangerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CountLocDang',
  });
  return CountLocDang;
};