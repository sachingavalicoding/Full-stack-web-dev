const express = require("express");

const productRouter = express.Router();


productRouter.get("/" , (req , res ) => {
    res.status(200).send(" Product page ");
    console.log(req.body);
})

module.exports = productRouter;