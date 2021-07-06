const express = require("express");
const router = express.Router();
const { messages, ROLE } = require("../data");
const { authUser, authRole } = require("../auth");

router.get("/", (req, res) => {
  res.status(200).json(messages);
});

router.get("/:messageId", authUser, setMessages, (req, res) => {
  res.json(req.message);
});

router.post("/new", authUser, authRole(ROLE.SUPERVISOR), (req, res) => {
  res.status(201).json(req.body);
});

router.delete("/productId", authUser, authRole(ROLE.SUPERVISOR), (req, res) => {
  res.send("Product deleted");
});

function setMessages(req, res, next) {
  const messageId = parseInt(req.params.messageId);
  req.message = messages.find((message) => message.id === messageId);

  if (req.message == null) {
    res.status(404);
    return res.send("Message not found");
  }
  next();
}

module.exports = router;
