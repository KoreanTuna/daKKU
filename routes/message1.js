let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('message1.ejs', {});
});

module.exports = router;