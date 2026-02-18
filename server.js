const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 IMPORTANT: use Render's port
const PORT = process.env.PORT || 10000;

// 🔥 Use environment variable (NOT hardcoded)
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch(err => console.log("Connection Error:", err));

app.get("/", (req, res) => {
  res.send("StayPK Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
