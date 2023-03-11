/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [
      {
        name: 'Desert',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Forest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Elbrus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mountain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
