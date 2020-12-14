const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/cars_db"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
mongoose.connection.on("connected", function(){
    console.log("Mongodb Connected!");
  });
  
  mongoose.connection.on("disconnected", function(){
    console.log("Mongodb disconnected! :( ");
  });
  
  mongoose.connection.on("error", function(error){
    console.log("Mongodb error!", error);
  });

module.exports = {
    Car: require("./Car"),
};