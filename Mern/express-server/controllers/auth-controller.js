const express = require("express");

const home = async (req , res) =>  {
    try{
        res.status(200).send("Home page");
    }
    catch(error) {
        res.status(400).send("{msg: page not found }");
    }
}
const signup = async (req , res) =>  {
    try{
        res.status(200).send("Sign up page");
    }
    catch(error) {
        res.status(400).send("{msg: page not found }");
    }
}

module.exports = {home , signup};