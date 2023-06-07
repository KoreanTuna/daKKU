var express = require('express')
var router = express.Router()
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const db = getFirestore();
const collectionCustom = db.collection("custom");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('onboarding2.ejs', {})
})
router.post("/saveCustom", (req, res) => {
  console.log("save_custom");
  const data = {
    // backg: req.body.title,
    backgroundURL : req.body.backgroundURL,
    folderURL : req.body.folderURL,
    folderAddURL :req.body.folderAddURL,
    color: req.body.color,

  };
  collectionCustom.doc("custom").set(data);
});
module.exports = router