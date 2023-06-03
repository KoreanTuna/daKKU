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
  res.render('homepage.ejs', {data:data})
})

module.exports = router