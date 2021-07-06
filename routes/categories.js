const express = require("express");
const router = express.Router();
const { categories, ROLE } = require("../data");
const { authUser, authRole } = require("../permission/auth");

router.get("/", authUser, (req, res) => {
  res.status(200).json(categories);
});

router.get("/:categoryId", setCategory, (req, res) => {
  res.json(req.category);
});

router.post(
  "/new",
  authUser,
  authRole(ROLE.SUPERVISOR, ROLE.EMPLOYEE),
  (req, res) => {
    res.status(201).json(req.body);
  }
);

router.delete("/:categoryId", (req, res) => {
  res.send("Category deleted");
});

function setCategory(req, res, next) {
  const categoryId = parseInt(req.params.categoryId);
  req.category = categories.find((category) => category.id === productId);

  if (req.category == null) {
    res.status(404);
    return res.send("Category not found");
  }
  next();
}

module.exports = router;
