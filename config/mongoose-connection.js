const mongoose = require('mongoose');

mongoose
 .connect("mongodb://127.0.0.1:27017/projectScatch8")
 .then(function(){
    console.log("connected");
 })
 .catch(function(err){
    console.log(err);
 })

 module.export = mongoose.connection;