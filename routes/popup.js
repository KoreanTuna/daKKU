var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("popup.ejs", {});
});

router.use("/node_modules", express.static(__dirname + "/node_modules"));
module.exports = router;
