const express = require("express");
const vApp = require("../app/voterApp");

const router = express.Router();

router.route("/").get(vApp.isVoterRegistered);
router.route("/OTP").patch(vApp.generateOTP);
router.route("/OTP").get(vApp.isOTPMatch);

module.exports = router;
