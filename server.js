const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://m8flyerhassanmushtaq_db_user:ZxH32eRgMsSL8Tex@cluster0.n9mdmc4.mongodb.net/staypk?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch(err => console.log("Connection Error:", err));
