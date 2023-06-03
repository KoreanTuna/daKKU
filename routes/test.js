var express = require("express");
var router = express.Router();
const admin = require("firebase-admin");
const bucket = admin.storage().bucket();

/* GET home page. */
router.get("/", async (req, res) => {
  // 이미지 업로드 함수
  async function uploadImage(localFilePath, destinationPath) {
    try {
      // 로컬 파일을 Firebase Storage에 업로드
      await bucket.upload(localFilePath, {
        destination: destinationPath,
        resumable: false, // 업로드를 일시 중단하고 재개할 수 있는지 여부 설정
      });

      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  // 이미지 업로드 예시
  const localFilePath = "public/images/heart.png";
  const destinationPath = "heart.jpg";

  uploadImage(localFilePath, destinationPath);
  try {
    const imageFile = bucket.file("cat.jpeg");

    // 이미지 다운로드
    const [url] = await imageFile.getSignedUrl({
      action: "read",
      expires: "03-09-2491", // 이미지 URL의 만료 일자
    });

    // EJS 템플릿 렌더링
    res.render("image.ejs", { imageUrl: url });
  } catch (error) {
    console.error("Error retrieving image:", error);
    res.status(500).send("Error retrieving image");
  }
});

module.exports = router;
