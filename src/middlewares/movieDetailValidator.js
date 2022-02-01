const db = require('../database/models')
const { check, checkSchema, param, validationResult, body } = require('express-validator');
const res = require('express/lib/response');

module.exports = [
    checkSchema({
        id: {
            in: ['params'],
            errorMessage: 'The id cannot be empty and must be a number.',
            isInt: true,
        },
    }),

    param('id')
        .custom(function (value) {
            return db.Movie_or_serie.findByPk(value)
                .then(user => {
                    if (!user) {
                        return Promise.reject('The movie doesn\'t exist')
                    }
                })
        }),

]