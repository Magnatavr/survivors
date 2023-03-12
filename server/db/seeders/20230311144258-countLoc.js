/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CountLocs",
      [
        {
          countryId: 17,
          locationId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 17,
          locationId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 17,
          locationId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 17,
          locationId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 18,
          locationId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 18,
          locationId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          countryId: 18,
          locationId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CountLocs", null, {});
  },
};
