/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CountLocDangs', [
      {
        countryId: 3,
        locationId: 3,
        dangerId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryId: 3,
        locationId: 3,
        dangerId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryId: 1,
        locationId: 2,
        dangerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryId: 1,
        locationId: 4,
        dangerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryId: 2,
        locationId: 1,
        dangerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryId: 4,
        locationId: 4,
        dangerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        countryId: 4,
        locationId: 4,
        dangerId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CountLocDangs', null, {});
  },
};
