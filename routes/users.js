const express = require("express");
const router = express.Router();
const { users, ROLE } = require("../data");
const { authUser, authRole } = require("../permission/auth");

router.get("/", authUser, authRole(ROLE.SUPERVISOR), (req, res) => {
  res.status(200).json(users);
});

router.get(
  "/:userId",
  setUser,
  authUser,
  authRole(ROLE.SUPERVISOR),
  (req, res) => {
    res.json(req.user);
  }
);

router.post("/new", (req, res) => {
  res.status(201).json(req.body);
});

router.delete("/:userId", setUser, authUser, authRole(ROLE.SUPERVISOR), (req, res) => {
  res.send("user deleted");
});

function setUser(req, res, next) {
  const userId = parseInt(req.params.userId);
  req.user = users.find((user) => user.id === userId);

  if (req.user == null) {
    res.status(404);
    return res.send("User not found");
  }
  next();
}

module.exports = router;
