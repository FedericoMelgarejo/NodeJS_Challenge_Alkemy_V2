const db = require('../database/models')
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt')

module.exports = [

    check('imageUrl')
        .trim().isLength({
            min: 1,
        })
        .withMessage('The url cannot be empty'),

    check('title')
        .trim().isLength({
            min: 1,
        })
        .withMessage('The title cannot be empty'),

    check('releaseDate')
        .trim()
        .isInt()
        .withMessage('The release date must be a number'),


    check('rating')
        .trim()
        .isInt()
        .withMessage('The rating must be a number between 1 and 5'),

    check('genre')
        .trim()
        .isInt()
        .withMessage('The genre_id must be a number'),
]