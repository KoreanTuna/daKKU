var express = require('express');
var router = express.Router();
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const collectionPost = db.collection('post');

/* GET homepage. */
router.get('/', async function (req, res, next) {

  const documentAll = await collectionPost.get();
  const documentList = documentAll.docs.map(item => item.id);
  let fileData= [];

  for(let i = 0; i<documentList.length; i++){
    let document = collectionPost.doc(documentList[i]);
    let temp = await document.get();
    fileData.push(temp.data());
  }
  for(let i = 0; i<fileData.length; i++){
    let content = fileData[i].content.ops;
    let title = fileData[i].title;
    
    //console.log(content);
    //console.log(title);
  }
  
  let customData;
  const docRef = db.collection('custom').doc('custom'); // 콜렉션과 문서의 참조를 가져옴
  await docRef.get()
  .then((doc) => {
    if (doc.exists) {
      customData = doc.data(); // JSON 객체 가져오기
    } 
  }).then(()=>{
    
    res.render('homepage.ejs', {data: customData, data2: fileData});
})

})

router.post("/saveCustom", (req, res) => {
  // console.log("save_custom");
  // console.log(req.body.backgroundURL);
  // console.log(req.body.folderURL);
  // console.log(req.body.folderAddURL);
  const data = {
    // backg: req.body.title,
    backgroundURL : req.body.backgroundURL,
    folderURL : req.body.folderURL,
    folderAddURL :req.body.folderAddURL,
    color: req.body.color,

  };
  //console.log("123123");
  collectionCustom.doc("custom").set(data)
  .then(() => {
    res.status(200).send("Data saved successfully.");
  })
  .catch((error) => {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data.");
  });
  
  //console.log("s456456ave_custom");
});


module.exports = router