const express = require("express");

const app = express();

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
