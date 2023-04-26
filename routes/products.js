var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("respond with a resource");
});

router.get("/pen", function (req, res, next) {
  res.render("products.ejs", {
    products: {
      name: "pen",
      img: "https://cdn.shopify.com/s/files/1/0657/7923/7091/products/WP08110_1_1200x1200_crop_center.webp?v=1664270222",
    },
    users: { comments: "hello" },
  });
});

module.exports = router;
