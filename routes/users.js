var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/add", function (req, res, next) {
  res.send("사용자가 추가되었습니다.");
});
router.get("/delete", function (req, res, next) {
  res.send("사용자가 삭제되었습니다.");
});
router.get("/modify", function (req, res, next) {
  res.send("사용자 정보가 수정되었습니다.");
});
module.exports = router;
