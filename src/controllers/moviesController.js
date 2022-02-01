const db = require("../database/models");
const { Op } = require('sequelize')
const { validationResult } = require('express-validator');

const moviesController = {

  //GET A LIST OF ALL MOVIES

  movieList: function (req, res) {

    //fetch all movies with their respective characters and genre excluding the especified columns: fk_movie_id and fk_genre_id

    db.Movie_or_serie.findAll({
      attributes: { exclude: ['fk_genre_id'] },
      include: [
        {
          association: 'genre'
        },
        {
          association: 'characters',
          attributes: { exclude: ['fk_movie_id'] },
        }],
    })

      //if there are movies, it sends a list with the results, otherwise it throws an error message

      .then(function (movies) {
        if (movies) {
          res.send(movies);
        } else {
          res.send({ msg: 'Sorry, there are no movies to show.' });
        }
      })
      .catch(errors => {
        res.send('Sorry, something went wrong'),
          console.log(errors)
      })
  },

  //GET DATA OF A SPECIFIC movie

  movieDetail: function (req, res) {

    let errors = validationResult(req)

    if (errors.isEmpty()) {

      //fetch the movie by its id with its respective characters and genre excluding the especified columns: fk_movie_id and fk_genre_id

      db.Movie_or_serie.findOne({
        attributes: { exclude: ['fk_genre_id'] },
        include: [
          {
            association: 'genre'
          },
          {
            association: 'characters',
            attributes: { exclude: ['fk_movie_id'] },
          }],
        where: {
          id: req.params.id
        }
      })

        .then(function (movie) {
          res.send(movie)
        })
        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })
    } else {
      return res.send(errors)
    }
  },

  //CREATE A movie

  createMovie: function (req, res) {

    let errors = validationResult(req)

    //create a movie with the data received by body

    if (errors.isEmpty()) {
      db.Movie_or_serie.create(
        {
          imageUrl: req.body.imageUrl,
          title: req.body.title,
          releaseDate: req.body.date,
          rating: req.body.rating,
          fk_genre_id: req.body.genre
        },
      )
        .then((result) => {
          console.log(result);
          res.send({ msg: 'movie created!' });
        })

        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })
    } else {
      return res.send(errors)
    }


  },

  //UPDATE A SPECIFIC movie DATA

  updateMovie: function (req, res) {

    let errors = validationResult(req)

    //look for the movie by its id to confirm that it exists

    if (errors.isEmpty()) {

      db.Movie_or_serie.findOne({
        where: {
          id: req.params.id,
        },
      })

        //if there is an equal id in the db, it if proceeds to update it with the data received by body, otherwise it throws an error message

        .then(function (movie) {
          if (movie) {
            db.Movie_or_serie.update(
              {
                imageUrl: req.body.imageUrl,
                title: req.body.title,
                releaseDate: req.body.date,
                rating: req.body.rating,
                fk_genre_id: req.body.genre
              },
              {
                where: {
                  id: req.params.id,
                },
              }
            ),
              res.send({ msg: 'Movie updated!' });
          } else {
            res.send({ msg: 'The movie does not exist' });
          }
        })
        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })
    } else {
      return res.send(errors)
    }

  },

  //DELETE A SPECIFIC movie

  deleteMovie: function (req, res) {

    //look for the movie by its id to confirm that it exists

    db.Movie_or_serie.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (movie) {

        //if there is an equal id in the db, its proceeds to eliminate it, otherwise it throws an error message

        if (movie) {
          db.Movie_or_serie.destroy({
            where: {
              id: req.params.id,
            },
          }),
            res.send({ msg: 'movie deleted!' });
        } else {
          res.send({ msg: 'The movie does not exist' });
        }
      })
      .catch(errors => {
        res.send('Sorry, something went wrong'),
          console.log(errors)
      })
  },

  //SEARCH

  search: function (req, res) {

    //parameters of search

    let title = req.query.name
    let order = req.query.order
    let fk_genre_id = req.query.genre

    //search variable that will contain the final search parameters

    let search = { where: {} };


    //chain of ifs that determine the final parameters of search

    if (order != undefined && order.trim().length > 0) {
      search = { where: {}, order: [['releaseDate', order.trim().toUpperCase()]] }
    }
    if (title != undefined && title.trim().length > 0) {
      search.where.title = { [Op.like]: `%${title.trim()}%` }
    }
    if (fk_genre_id != undefined && fk_genre_id.trim().length > 0) {
      search.where.fk_genre_id = { [Op.eq]: fk_genre_id.trim() }
    }

    //final if which will run the search with the parameters of the 'search' variable



    if (search.where.title || search.where.order || search.where.fk_genre_id) {

      db.Movie_or_serie.findAll(search)
        .then(result => {
          if (result.length > 0) {
            res.send(result)
          } else {
            res.send('There is no results for this search')
          }
        })

    } else {
      res.send('There is no results for this search')
    }
  }
};

module.exports = moviesController;
