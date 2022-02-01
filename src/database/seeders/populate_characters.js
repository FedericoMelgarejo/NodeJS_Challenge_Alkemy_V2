module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert(
        "characters",
        [
          {
            id: 1,
            name: "Tiana",
            imageUrl:
              "https://static.wikia.nocookie.net/princesas-y-mascotas-disney/images/a/a5/Tiana-0.jpg/revision/latest?cb=20190827131858&path-prefix=es",
            age: 21,
            weight: 50,
            history:
              'Princess Tiana of Maldonia (sometimes "Tia") is the protagonist of Disney s 2009 animated feature film, The Princess and the Frog.',
            fk_movie_id: 1,
          },
          {
            id: 2,
            name: "Prince Naveen",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/9/92/Profile_-_Prince_Naveen.jpeg/revision/latest/scale-to-width-down/516?cb=20190312060943",
            age: 20,
            weight: 60,
            history:
              "Prince Naveen is the deuteragonist of Disney s 2009 animated feature film, The Princess and the Frog.",
            fk_movie_id: 1,
          },
          {
            id: 3,
            name: "Belle",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Belle.jpeg/revision/latest/scale-to-width-down/516?cb=20190312024430",
            age: 17,
            weight: 50,
            history:
              "Belle is the female protagonist of Disney s 1991 animated feature film, Beauty and the Beast.",
            fk_movie_id: 2,
          },
          {
            id: 4,
            name: "Beast",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/8/84/Profile_-_Beast.jpeg/revision/latest/scale-to-width-down/516?cb=20190312024919",
            age: 21,
            weight: 50,
            history:
              "The Beast is the male protagonist of Disney s 1991 animated feature film, Beauty and the Beast.",
            fk_movie_id: 2,
          },
          {
            id: 5,
            name: "Mulan",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/0/04/Profile_-_Mulan.jpeg/revision/latest/scale-to-width-down/515?cb=20190312015124",
            age: 16,
            weight: 50,
            history:
              "Fa Mulan is the titular protagonist of Disney s 1998 animated feature film, Mulan. ",
            fk_movie_id: 3,
          },
        ],
        {}
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("characters", null, {});
  },
};
