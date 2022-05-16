const express = require("express");
const bApp = require("../app/ballotApp");

const router = express.Router();

router.route("/presidents").get(bApp.getPresidentCandidates);
router.route("/vpssp").get(bApp.getVPSSPCandidates);

module.exports = router;