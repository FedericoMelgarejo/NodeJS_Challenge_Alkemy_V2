module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movie_or_serie', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: true,
    },
    releaseDate: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    rating: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    fk_genre_id:{
        type: Sequelize.INTEGER(11),
        allowNull: true,
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movie_or_serie');
  }
};