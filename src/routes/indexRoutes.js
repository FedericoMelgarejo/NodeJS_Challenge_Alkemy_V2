const express = require("express");
const router = express.Router();

//Home
router.get('/', (req, res) => {
  res.send(
    'Welcome to DisneyAPI! go to /auth/login to log-in. Not registered yet? go to /auth/register to generate an user'
  );
});

router.get('/docs',(req, res) => {
  res.redirect('https://documenter.getpostman.com/view/16608092/UVeDt7zY')
})

module.exports = router;
