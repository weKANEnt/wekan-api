const express = require("express");
const vApp = require("../app/voterApp");

const router = express.Router();

router.route("/").get(vApp.isVoterRegistered);

module.exports = router;
