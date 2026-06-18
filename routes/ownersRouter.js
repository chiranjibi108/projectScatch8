const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owners-model");

router.get("/", function(req,res){
    res.send("hey its working");
});

// if(process.env === "development"){
//     console.Console.log("hey");
// }

console.log(process.env.Node_ENV);

router.post("/create", function(req,res){
    res.send("hey its working");
});

module.exports = router;