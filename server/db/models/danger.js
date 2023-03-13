const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Danger extends Model {
    static associate({ CountLocDang }) {
      this.hasMany(CountLocDang, { foreignKey: 'dangerId'});
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