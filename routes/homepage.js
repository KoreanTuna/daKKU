var express = require('express');
var router = express.Router();
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const collectionPost = db.collection('post');

/* GET homepage. */
router.get('/', async function (req, res, next) {

  const documentAll = await collectionPost.get();
  const documentList = documentAll.docs.map(item => item.id);
  let data= [];

  for(let i = 0; i<documentList.length; i++){
    let document = collectionPost.doc(documentList[i]);
    let temp = await document.get();
    data.push(temp.data());
  }
  for(let i = 0; i<data.length; i++){
    let content = data[i].content.ops;
    let title = data[i].title;
    
    //console.log(content);
    //console.log(title);
  }
  console.log(data);
  let customData;
  const docRef = db.collection('custom').doc('custom'); // 콜렉션과 문서의 참조를 가져옴
  await docRef.get()
  .then((doc) => {
    if (doc.exists) {
      customData = doc.data(); // JSON 객체 가져오기
    } 
  }).then(()=>{
    res.render('homepage.ejs', {data: customData});
}

module.exports = router