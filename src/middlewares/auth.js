const db = require('../database/models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
    
    const token = req.headers['token']

    jwt.verify(token, process.env.JWT_SECRET, (error, authData) => {
        if (error) {
            res.send('Invalid or inexistent token, please login.')
        } else {

            const verified = jwt.verify(token, process.env.JWT_SECRET)

            db.Users.findByPk(verified.user.id)
                .then(user => {
                    if (!user) {
                        return res.send({ msg: 'This user does not exist or your token is invalid, please login again.' })
                    } else {
                        next()
                    }
                })
        }
    })
}