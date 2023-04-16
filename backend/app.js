const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/blogs", router);

mongoose.connect(
  "mongodb+srv://krishnsundaram:X24ReyieAh57EnXu@cluster0.srv9ksk.mongodb.net/test"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error occurred");
});

db.on("open", () => {
  console.log("database connected successfully");
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
