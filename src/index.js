// Module Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//import "dotenv/config";

//Router imports
const voters = require("./routes/voterRoute");

//
const app = express();

// Initialize Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uwivotes/votes", voters);

app.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
