module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.bulkInsert('genres', [{

        id:1,
        imageUrl:'Animation.jpg',
        name:'Animation',

      },
      {

        id:2,
        imageUrl:'Musical.jpg',
        name:'Musical',

      },

    ], {}),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
