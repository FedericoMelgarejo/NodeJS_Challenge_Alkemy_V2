const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController')
const auth = require('../middlewares/auth')
const movieDetailValidator = require('../middlewares/movieDetailValidator')
const movieCreateValidator = require('../middlewares/movieCreateValidator')

/// Movies GET Routes

  //Movie list
  router.get('/', auth,  moviesController.movieList)
  
  //Movie detail
   router.get('/detail/:id?', auth, movieDetailValidator, moviesController.movieDetail)
  
/// Movies POST Routes
 
   //Create a movie
   router.post('/create',auth, movieCreateValidator, moviesController.createMovie)
   
   //Update movie's data
   router.put('/update/:id',auth, movieCreateValidator, moviesController.updateMovie)
   
   //Delete a movie
   router.delete('/delete/:id',auth, moviesController.deleteMovie)
  
   //Search
   router.get('/search',auth, moviesController.search)
 
 

module.exports = router;