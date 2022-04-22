// Module Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const test = require("./api/routes/voterRoute");
//import "dotenv/config";

const app = express();

// Initialize Middleware
app.use(cors());
app.use(bodyParser.json());
//app.use("/api/votes", test)

app.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

app.listen(8080, () => {
  console.log(`Server is running`);
  ///console.log(test.checkUser("example@example.com"));
});
