const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ CountLoc, LocDang }) {
      Location.hasMany(CountLoc, { foreignKey: 'locationId' });
      Location.hasMany(LocDang, { foreignKey: 'locationId' });
    }
  }
  Location.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};