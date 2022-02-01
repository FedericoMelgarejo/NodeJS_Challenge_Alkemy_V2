const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController')
const auth = require('../middlewares/auth')
const characterDetailValidator = require('../middlewares/characterDetailValidator')
const characterCreateValidator = require('../middlewares/characterCreateValidator')

/// Character GET Routes

//Character list
router.get('/', auth, charactersController.characterList)

//Character detail
router.get('/detail/:id?', auth, characterDetailValidator, charactersController.characterDetail)

/// Character POST Routes

//Create a character
router.post('/create', auth, characterCreateValidator, charactersController.createCharacter)

//Update character's data
router.put('/update/:id', auth, characterCreateValidator, charactersController.updateCharacter)

//Delete a character
router.delete('/delete/:id', auth, charactersController.deleteCharacter)

//Search
router.get('/search', auth, charactersController.search)



module.exports = router;