const router = require("express").Router();
const productController = require("../controllers/product.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post(
  "/",
  [verifyToken.verifyAccessToken, verifyToken.isAdmin],
  productController.createProduct
);

router.get("/", productController.getProducts);

router.put(
  "/:pid",
  [verifyToken.verifyAccessToken, verifyToken.isAdmin],
  productController.updateProduct
);
router.delete(
  "/:pid",
  [verifyToken.verifyAccessToken, verifyToken.isAdmin],
  productController.deleteProduct
);
router.get("/:pid", productController.getProduct);

module.exports = router;
