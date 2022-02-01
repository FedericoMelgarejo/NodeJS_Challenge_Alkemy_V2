const db = require("../database/models");
const { Op } = require('sequelize')
const { validationResult } = require('express-validator');

const charactersController = {

  //GET A LIST OF ALL CHARACTERS

  characterList: function (req, res) {

    //fetch all characters with their respective movie and genre excluding the especified columns: fk_movie_id and fk_genre_id

    db.Character.findAll({
      attributes: { exclude: ['fk_movie_id'] },
      include: [{
        association: 'movie',
        attributes: { exclude: ['fk_genre_id'] },
        include: [{ association: 'genre' }],
      }],
    })

      //if there are characters, it sends a list with the results, otherwise it throws an error message

      .then(function (chars) {
        if (chars) {
          res.send(chars);
        } else {
          res.send({ msg: 'Sorry, there are no characters to show.' });
        }
      })
      .catch(errors => {
        res.send('Sorry, something went wrong'),
          console.log(errors)
      })
  },

  //GET DATA OF A SPECIFIC CHARACTER

  characterDetail: function (req, res) {

    let errors = validationResult(req)

    if (errors.isEmpty()) {

      //fetch the character by its id with its respective movie and genre excluding the especified columns: fk_movie_id and fk_genre_id

      db.Character.findOne({
        attributes: { exclude: ['fk_movie_id'] },
        include: [{
          association: 'movie',
          attributes: { exclude: ['fk_genre_id'] },
          include: [{ association: 'genre' }],
        }],
        where: {
          id: req.params.id
        }
      })

        //if there is an equal id in the db, it send the resulting data, otherwise it throws an error message

        .then(function (char) {
          res.send(char)
        })
        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })
    } else {
      return res.send(errors)
    }

  },

  //CREATE A CHARACTER

  createCharacter: function (req, res) {

    let errors = validationResult(req)

    if (errors.isEmpty()) {

      //create a character with the data received by body

      db.Character.create(
        {
          imageUrl: req.body.imageUrl,
          name: req.body.name,
          age: req.body.age,
          weight: req.body.weight,
          history: req.body.history,
          fk_movie_id: req.body.movie
        },
      )
        .then((result) => {
          console.log(result);
          res.send({ msg: 'Character created!' });
        })

        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })

    } else {
      return res.send(errors)
    }
  },

  //UPDATE A SPECIFIC CHARACTER DATA

  updateCharacter: function (req, res) {

    let errors = validationResult(req)

    if (errors.isEmpty()) {

      //look for the character by its id to confirm that it exists

      db.Character.findOne({
        where: {
          id: req.params.id,
        },
      })

        //if there is an equal id in the db, it if proceeds to update it with the data received by body, otherwise it throws an error message

        .then(function (char) {
          if (char) {
            db.Character.update(
              {
                imageUrl: req.body.imageUrl,
                name: req.body.name,
                age: req.body.age,
                weight: req.body.weight,
                history: req.body.history,
                fk_movie_id: req.body.movie
              },
              {
                where: {
                  id: req.params.id,
                },
              }
            ),
              res.send({ msg: 'Character updated!' });
          } else {
            res.send({ msg: 'The character does not exist' });
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

  //DELETE A SPECIFIC CHARACTER

  deleteCharacter: function (req, res) {

    //look for the character by its id to confirm that it exists

    db.Character.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (char) {

        //if there is an equal id in the db, its proceeds to eliminate it, otherwise it throws an error message

        if (char) {
          db.Character.destroy({
            where: {
              id: req.params.id,
            },
          }),
            res.send({ msg: 'Character deleted!' });
        } else {
          res.send({ msg: 'The character does not exist' });
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

    // let { name, age, weight, movie } = req.query

    let name = req.query.name
    let age = req.query.age
    let weight = req.query.weight
    let fk_movie_id = req.query.movie

    //search variable that will contain the final search parameters

    let search = { where: {} };

    //chain of ifs that determine the final parameters of search

    if (name != undefined && name.trim().length > 0) {
      search.where.name = { [Op.like]: `%${name.trim()}%` }
    }
    if (age != undefined && age.trim().length > 0) {
      search.where.age = { [Op.eq]: age.trim() }
    }
    if (weight != undefined && weight.trim().length > 0) {
      search.where.weight = { [Op.eq]: weight.trim() }
    }
    if (fk_movie_id != undefined && fk_movie_id.trim().length > 0) {
      search.where.fk_movie_id = { [Op.eq]: fk_movie_id.trim() }
    }

    //final if which will run the search with the parameters of the 'search' variable

    console.log(search, "ACAAAAAAAAAAA")

    if (search.where.name || search.where.age || search.where.weight || search.where.fk_movie_id) {

      db.Character.findAll(search)
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

module.exports = charactersController;
