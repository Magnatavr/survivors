const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CountLoc extends Model {
    static associate({ Country, Location}) {
      CountLoc.belongsTo(Country, { foreignKey: 'countryId' });
      CountLoc.belongsTo(Location, { foreignKey: 'locationId' });
    }
  }
  CountLoc.init({
    countryId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CountLoc',
  });
  return CountLoc;
};