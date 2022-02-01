module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.bulkInsert('movie_or_serie', [{

        id:1,
        imageUrl:'https://static.wikia.nocookie.net/disney/images/3/30/Princess_and_the_frog.jpg/revision/latest/scale-to-width-down/2000?cb=20160921215735&path-prefix=es',
        title:'The princess and the frog',
        releaseDate:2009,
        rating:5,
        fk_genre_id:1

      },
      {

        id:2,
        imageUrl:'https://static.wikia.nocookie.net/disney/images/7/7c/Beautybeastposter.jpg/revision/latest/scale-to-width-down/337?cb=20190217043649&path-prefix=es',
        title:'The beauty and the beast',
        releaseDate:1991,
        rating:4,
        fk_genre_id:2

      },
      {

        id:3,
        imageUrl:'https://static.wikia.nocookie.net/disney/images/c/cb/Mulan_ver1_xlg.jpg/revision/latest/scale-to-width-down/336?cb=20160923003413&path-prefix=es',
        title:'Mulan',
        releaseDate:1991,
        rating:5,
        fk_genre_id:1

      },
    ], {}),

    ])
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movie_or_serie', null, {});
  }
};
