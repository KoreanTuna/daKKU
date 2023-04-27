var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('post.ejs', {})
  
})
router.use('/node_modules', express.static(__dirname + '/node_modules'));

module.exports = router
