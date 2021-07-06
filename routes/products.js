const express = require("express");
const router = express.Router();
const { products, ROLE } = require("../data");
const { authUser, authRole } = require("../auth");

router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:productId", setProduct, (req, res) => {
  res.json(req.product);
});

router.post(
  "/new",
  authUser,
  authRole(ROLE.SUPERVISOR, ROLE.EMPLOYEE),
  (req, res) => {
    res.status(201).json(req.body);
  }
);

router.delete("/productId", (req, res) => {
  res.send("Product deleted");
});

function setProduct(req, res, next) {
  const productId = parseInt(req.params.productId);
  req.product = products.find((product) => product.id === productId);

  if (req.product == null) {
    res.status(404);
    return res.send("Product not found");
  }
  next();
}

module.exports = router;
