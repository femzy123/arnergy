const express = require("express");
const app = express();
const { ROLE, users } = require("./data");
const productRouter = require("./routes/products");
const messageRouter = require("./routes/messages");
const categoryRouter = require("./routes/categories");
const userRouter = require("./routes/users")
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(setUser);
app.use("/products", productRouter);
app.use("/messages", messageRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Anergy Assessment Solutions");
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
