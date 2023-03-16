const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ CountLocDang }) {
      Location.hasMany(CountLocDang, { foreignKey: 'locationId' });
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