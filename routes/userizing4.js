var express = require('express')
var router = express.Router()

// var urlParams = new URLSearchParams(window.location.search);
// var selectedButton = urlParams.get('selectedButton');

// if (selectedButton === "tutorial") {
//   // tutorial 버튼을 눌렀을 때의 처리
//   router.get('/', function (req, res, next) {
//   res.render('tutorial.ejs', {})
//   })

// } else if (

// /* GET home page. */
// router.get('/', function (req, res, next) {
// res.render('userizing4.ejs', {})
// })
// )

router.get('/', function (req, res, next) {
res.render('userizing4.ejs', {})
})

module.exports = router
