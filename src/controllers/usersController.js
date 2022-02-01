
require('dotenv').config();
const db = require('../database/models');
const { Op } = require('sequelize');
const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


// to complete the sendgrid configuration you will need a sendgrid account to verify a sender and generate an api-key

//Api key that can be defined in the .env file at the root directory
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//your email sender goes here
const sender = ''

const usersController = {

  register: function (req, res) {

    let errors = validationResult(req)
    let msg = {}
    let { email, username, password } = req.body

    //if errors is empty

    if (errors.isEmpty()) {
      db.Users.create({
        username,
        email,
        password: bcrypt.hashSync(password.trim(), 12)
      })
        .then(user => {

          jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
            if (sender != '') {
              msg = {
                to: email,
                from: sender,
                subject: 'From DisneyAPI',
                text: 'Welcome to DisneyAPI!',
                html: '<h1>Welcome to DisneyAPI!</h1>',
              }
              sgMail.send(msg)
                .then(() => {
                  console.log('Email sent!')
                })
                .catch((error) => {
                  console.error(error)
                })
            }
            res.send({
              auth: true,
              msg: `Your registration is complete, welcome ${username}! you can login in /auth/login`,
              token
            })
          })
        })
        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })
    } else {
      return res.send(errors)
    }
  },
  login: function (req, res) {

    let errors = validationResult(req)
    let { email, password } = req.body

    //if errors is empty 

    if (errors.isEmpty()) {
      db.Users.findOne({
        where: {
          email
        }
      })
        .then(user => {
          jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
            res.send({
              auth: true,
              msg: `Welcome ${user.username}`,
              token
            })
          })
        })
        .catch(errors => {
          res.send('Sorry, something went wrong'),
            console.log(errors)
        })
    } else {
      return res.send(errors)
    }
  }
};

module.exports = usersController;
