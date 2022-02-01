const db = require('../database/models')
const { check, body } = require('express-validator');
const bcrypt = require('bcrypt')

module.exports = [


    check('imageUrl')
        .trim()
        .isLength({
            min: 1,
        })
        .withMessage('The url cannot be empty'),

    check('name')
        .trim()
        .isLength({
            min: 1,
        })
        .withMessage('The name cannot be empty'),

    check('age')
        .trim()
        .isInt()
        .withMessage('The age must be a number'),

    check('weight')
        .trim()
        .isInt()
        .withMessage('The weight must be a number'),

    check('history')
        .trim()
        .isLength({
            min: 1,
        })
        .withMessage('The history cannot be empty'),

    body('movie')
        .trim()
        .isInt()
        .withMessage('The movie_id must be a number'),


]