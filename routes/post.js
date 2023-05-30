var express = require("express");
var router = express.Router();
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const collectionPost = db.collection('post');
const admin = require('firebase-admin');
// const multer = require('multer');
// const bucket = admin.storage().bucket();
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//       fileSize: 5 * 1024 * 1024 // 최대 허용 크기 5MB
//   }
// });
router.post('/save_image', upload.array('images'), async (req, res) => {
  // const bucket = admin.storage().bucket();

  // async function uploadFile(filePath, destinationPath) {
  //   try {
  //     await bucket.upload(filePath, {
  //       destination: destinationPath
  //     });
  //     console.log('File uploaded successfully.');
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //   }
  // }

  // // 사용 예시
  // const filePath = '/images/농장.png';
  // const destinationPath = '/농장주.png';

  // uploadFile(filePath, destinationPath);
  try {
      let urls = [];
      for (const file of req.files) {
        console.log(file);
          // Firebase에 파일 업로드
          const blob = bucket.file(Date.now() + path.extname(file.originalname));
          const blobStream = blob.createWriteStream({
              metadata: {
                  contentType: file.mimetype
              }
          });

          blobStream.on('error', (err) => {
              res.status(500).json({ error: err.toString() });
          });

          blobStream.on('finish', async () => {
              // 이미지 다운로드 URL 생성
              const publicUrl = await blob.getSignedUrl({
                  action: 'read',
                  expires: '03-09-2491'
              });

              urls.push(publicUrl);
              if (urls.length === req.files.length) {
                  // 모든 이미지 URL이 생성되었을 때 응답
                  res.status(200).json({ urls });
              }
          });

          blobStream.end(file.buffer);
      }
  } catch (error) {
      res.status(500).json({ error: error.toString() });
  }
});
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

