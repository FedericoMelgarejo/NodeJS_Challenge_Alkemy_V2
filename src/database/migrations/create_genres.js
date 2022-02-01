module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    imageUrl: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: true,
    },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('genres');
  }
};