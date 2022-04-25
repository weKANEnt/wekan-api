const express = require("express");
const aApp = require("../app/adminApp");

const router = express.Router();

router.route("/admin/addVoter").post(aApp.registerVoter);
router.route("/admin/login").post(aApp.loginAdmin);

module.exports = router;