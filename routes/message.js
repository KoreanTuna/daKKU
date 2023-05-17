let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('message.ejs', {});
});

module.exports = router;