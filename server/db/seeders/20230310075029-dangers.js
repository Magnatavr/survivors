/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dangers', [
      {
        name: 'Sonya',
        article: 'Соня, вы настолько великолепны в своей работе, что даже бот-помощник не смог бы заменить вас.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Viper',
        article: 'Не трогайте гадюку и не пытайтесь ее убить. Гадюки атакуют, если чувствуют угрозу, поэтому ваша попытка убить ее может вызвать агрессию.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bear',
        article: 'Если медведь начинает приближаться, попробуйте сделать громкий звук, чтобы отвлечь его внимание.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tiger',
        article: 'Не поворачивайте спину тигру. Тигры атакуют сзади, поэтому необходимо всегда держаться лицом к тигру.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dangers', null, {});
  },
};
