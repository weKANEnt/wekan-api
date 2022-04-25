// Module Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
//import "dotenv/config";

//Router imports
const voters = require("./routes/voterRoute");
const admin = require("./routes/adminRoute");

//
const app = express();

// Initialize Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use("/uwivotes/votes", voters);
app.use("/uwivotes", admin);

app.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
