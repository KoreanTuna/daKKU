var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index.ejs", {
    name: "Minwoo",
    id: 21500356,
    major: "컴퓨터공학/UX공학",
  });
});
router.get("/1", function (req, res, next) {
  res.render("index.ejs", {
    name: "Song",
    id: 2113132,
    major: "학생설계융합전공",
  });
});

module.exports = router;
