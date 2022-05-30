const express = require("express");
const eApp = require("../app/electionApp");

const router = express.Router();

router.route("/create").post(eApp.createElection);
router.route("/delete").delete(eApp.deleteElection);
router.route("/results").post(eApp.generateElectionResults);

module.exports = router;
