var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

const indexRouter = require('./routes/indexRoutes')
const characterRouter = require('./routes/charactersRoutes');
const moviesRouter = require('./routes/moviesRoutes');
const usersRouter = require('./routes/usersRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/characters', characterRouter);
app.use('/movies', moviesRouter);
app.use('/auth', usersRouter);

module.exports = app;
