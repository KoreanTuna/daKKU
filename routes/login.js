let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login.ejs', {});
});

module.exports = router;