var express = require("express");
var router = express.Router();
const { productController } = require("../controllers");

router.post("/", productController.create);
router.get("/", productController.read);
router.patch("/:id", productController.update);
router.delete("/:id", productController.delete);
module.exports = router;