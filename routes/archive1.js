var express = require("express");
var router = express.Router();
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const collectionPost = db.collection('post');

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("archive1.ejs", {});
// });

router.get("/", async function (req, res, next) {
  const documentAll = await collectionPost.get();
  const documentList = documentAll.docs.map(item => item.id);
  let data= [];
  // var ref = await collectionPost.doc('dOQ1bTdSaAnWcDTdaY97').get();
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

  // var ref = await collectionPost.doc('dOQ1bTdSaAnWcDTdaY97').get();
  //es.render("archive1.ejs",{content : data[0].content.ops, title : data[0].title}, { async: true });
  res.render("archive1.ejs",{content : data[0].content.ops, title : data[0].title});
});

router.get("/view", async function (req, res, next) {
  const documentAll = await collectionPost.get();
  const documentList = documentAll.docs.map(item => item.id);
  let data= [];
  // var ref = await collectionPost.doc('dOQ1bTdSaAnWcDTdaY97').get();
  for(let i = 0; i<documentList.length; i++){
    let document = collectionPost.doc(documentList[i]);
    let temp = await document.get();
    data.push(temp.data());
  }
  // console.log(data[0].content.ops);
  res.render("archive1.ejs", {doc : data[0].content.ops, title : data[0].title, heartCount : 0});

});
// router.post("/save_post", (req,res)=>{
//   const data = {
//     title : req.body.title,
//     content : req.body.content
//   };
//   collectionPost.add(data);
// });

router.use("/node_modules", express.static(__dirname + "/node_modules"));


module.exports = router;

