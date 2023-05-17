var express = require('express')
var router = express.Router()
const admin = require('firebase-admin');
const bucket = admin.storage().bucket();

/* GET home page. */
router.get('/', async (req, res) => {
    try {
      const imageFile = bucket.file('cat.jpeg');
  
      // 이미지 다운로드
      const [url] = await imageFile.getSignedUrl({
        action: 'read',
        expires: '03-09-2491' // 이미지 URL의 만료 일자
      });
  
      // EJS 템플릿 렌더링
      res.render('image.ejs', { imageUrl: url });
    } catch (error) {
      console.error('Error retrieving image:', error);
      res.status(500).send('Error retrieving image');
    }
  });
  
module.exports = router
