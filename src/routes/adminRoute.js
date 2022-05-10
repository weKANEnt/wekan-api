const express = require("express");
const aApp = require("../app/adminApp");

const router = express.Router();

router.route("/admin/addVoter").post(aApp.registerVoter);
router.route("/admin/login").post(aApp.loginAdmin);
router.route("/admin/addCandidate").post(aApp.addCandidate)

module.exports = router;
