var express = require("express");
var router = express.Router();
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const db = getFirestore();
const collectionPost = db.collection("post");
const admin = require("firebase-admin");
const multer = require("multer");
const bucket = admin.storage().bucket();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
// const multer = require("multer");

router.post("/save_image", upload.array("images"), async (req, res) => {
  try {
    let urls = [];
    for (const file of req.files) {
      const blob = bucket.file(Date.now() + path.extname(file.originalname));
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      blobStream.on("error", (err) => {
        res.status(500).json({ error: err.toString() });
      });

      blobStream.on("finish", async () => {
        const publicUrl = await blob.getSignedUrl({
          action: "read",
          expires: "03-09-2491",
        });

        urls.push(publicUrl[0]);
        if (urls.length === req.files.length) {
          res.status(200).json({ urls });
        }
      });
      blobStream.end(file.buffer);
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

router.get("/", function (req, res, next) {
  res.render("post.ejs", {});
});

router.post("/save_post", (req, res) => {
  console.log("save");
  // var upload = multer({
  //   storage: multer.memoryStorage(),
  //   limits: {
  //     fileSize: 5 * 1024 * 1024, // 제한 사이즈 설정
  //   },
  // });
  const data = {
    title: req.body.title,
    content: req.body.content,
    tag: req.body.tag,
  };
  collectionPost.add(data);
});

router.get("/view", async function (req, res, next) {
  const documentAll = await collectionPost.get();
  const documentList = documentAll.docs.map((item) => item.id);
  let data = [];
  // var ref = await collectionPost.doc('dOQ1bTdSaAnWcDTdaY97').get();
  for (let i = 0; i < documentList.length; i++) {
    let document = collectionPost.doc(documentList[i]);
    let temp = await document.get();
    data.push(temp.data());
  }
  // console.log(data[0].content.ops);
  res.render("viewPost.ejs", {
    doc: data[0].content.ops,
    title: data[0].title,
  });
});

router.use("/node_modules", express.static(__dirname + "/node_modules"));
module.exports = router;
