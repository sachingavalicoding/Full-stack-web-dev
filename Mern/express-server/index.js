const express = require("express");
const router = require("./router/auth-router.js");
const productRouter = require("./router/product-router.js")
const app = express();

app.use("/api/auth" , router);

app.use("/api/product" , productRouter);

app.get("/", (req, res) => {
  res.status(200).send(" Welcome to mern stack Project ");
});

app.get("/login", (req, res) => {
  res.status(200).send(" Login page ");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(` Server is running on PORT ${PORT}`);
});
