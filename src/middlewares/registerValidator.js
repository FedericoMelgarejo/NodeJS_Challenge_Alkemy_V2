const db = require("../database/models")

const { check, validationResult, body } = require('express-validator')

module.exports = [
    check('username')
        .isLength({
            min: 2
        })
        .withMessage('Enter a username'),

    check('email')
        .isEmail()
        .withMessage('Invalid email'),

    body('email')
        .custom(function (value) {
            return db.Users.findOne({
                where: {
                    email: value
                }
            })
                .then(user => {
                    if (user) {
                        return Promise.reject('This email is already registered')
                    }
                })
        }),

    check('password')
        .isLength({
            min: 4,
        })
        .withMessage('The password must be at least 4 characters long'),

    check('password')
        .isLength({
            max:12,
        })
        .withMessage('The password must not be longer than 12 characters.'),
        
]