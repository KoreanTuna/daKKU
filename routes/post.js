var express = require("express");
var router = express.Router();
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const collectionPost = db.collection('post');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("post.ejs", {});
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
  res.render("viewPost.ejs", {doc : data[0].content.ops, title : data[0].title});

});
router.post("/save_post", (req,res)=>{
  const data = {
    title : req.body.title,
    content : req.body.content
  };
  collectionPost.add(data);
});

router.use("/node_modules", express.static(__dirname + "/node_modules"));


module.exports = router;

