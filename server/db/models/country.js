const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate({ CountLocDang }) {
      this.hasMany(CountLocDang, { foreignKey: 'countryId'});
    }
  }
  Country.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country; 
};