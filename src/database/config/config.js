require('dotenv').config()
module.exports={
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.TEST_DB_USER,
    "password": process.env.TEST_DB_PASS,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.TEST_DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.PRODUCTION_DB_USER,
    "password": process.env.PRODUCTION_DB_PASS,
    "database": process.env.PRODUCTION_DB_NAME,
    "host": process.env.PRODUCTION_DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}
