const express = require("express");
const eApp = require("../app/electionApp");

const router = express.Router();

router.route("/create").post(eApp.createElection);

module.exports = router;