var express = require("express");
var router = express.Router();
const { productController } = require("../controllers");

router.post("/", productController.create);
module.exports = router;