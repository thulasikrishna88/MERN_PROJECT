const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://thulasimern:mern123@mernproject.azibbmp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection succesfull"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("server is running at port 4000");
});
