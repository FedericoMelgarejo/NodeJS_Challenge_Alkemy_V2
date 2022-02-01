module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('characters', {
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
      age: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      weight: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      history: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      fk_movie_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('characters');
  }
};