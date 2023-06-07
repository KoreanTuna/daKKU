var express = require('express')
var router = express.Router()
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const db = getFirestore();

router.get('/', async function (req, res, next) {
  let customData;
  const docRef = db.collection('custom').doc('custom'); // 콜렉션과 문서의 참조를 가져옴
  await docRef.get()
  .then((doc) => {
    if (doc.exists) {
      customData = doc.data(); // JSON 객체 가져오기
    } 
  }).then(()=>{
    res.render('homepage.ejs', {data: customData})
  })
})

module.exports = router