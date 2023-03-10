/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [
      {
        name: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Saudi Arabia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Russia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tibet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
