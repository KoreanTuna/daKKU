let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
  res.render('welcome.ejs', {})
})

module.exports = router