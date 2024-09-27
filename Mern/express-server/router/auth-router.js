const express = require("express");
const { home, signup } = require("../controllers/auth-controller");

const router = express.Router();

router.get("/", home)
router.get("/signup" , signup);

router.route("/signin").post((req, res) => {
  res.status(200).send(" SIGN IN PAGE ");
});

module.exports = router;
