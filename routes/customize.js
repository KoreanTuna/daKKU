let express = require('express');
let router = express.Router();


const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const db = getFirestore();
const collectionCustom = db.collection("custom");

router.get('/', function(req, res, next) {
  res.render('customize.ejs', {});
});

router.post("/saveCustom", (req, res) => {
  console.log("save_custom");
  console.log(req.body.backgroundURL);
  console.log(req.body.folderURL);
  console.log(req.body.folderAddURL);
  const data = {
    // backg: req.body.title,
    backgroundURL : req.body.backgroundURL,
    folderURL : req.body.folderURL,
    folderAddURL :req.body.folderAddURL,
    color: req.body.color,

  };
  console.log("123123");
  collectionCustom.doc("custom").set(data)
  .then(() => {
    res.status(200).send("Data saved successfully.");
  })
  .catch((error) => {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data.");
  });
  
  console.log("s456456ave_custom");
});

module.exports = router;

