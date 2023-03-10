const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Danger extends Model {
    static associate({ LocDang }) {
      this.hasMany(LocDang, { foreignKey: 'dangerId'});
    }
  }
  Danger.init({
    name: DataTypes.STRING,
    article: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Danger',
  });
  return Danger;
};