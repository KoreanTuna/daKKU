var express = require('express')
var router = express.Router()

// firebase

const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('tutorial.ejs', {})
})

module.exports = router