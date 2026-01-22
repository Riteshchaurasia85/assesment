require('dotenv').config();

const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect(process.env.MONGO_URI)
  .then( () =>{
    console.log("MongoDB Connected");
  })
  .catch ((err) => {
    console.log("MongoDB not Connected:", err);
  })
}

module.exports = connectDB;