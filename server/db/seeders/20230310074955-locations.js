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
        name: 'Moscow Elbrus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mountain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Voronezh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Varanasi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cave',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'River',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sity',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Deep desert',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lhasa Capital',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Deep mountain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
