const express = require("express");
const aApp = require("../app/adminApp");

const router = express.Router();

router.route("/admin/addVoter").post(aApp.registerVoter);
router.route("/admin/login").post(aApp.loginAdmin);
router.route("/admin/addCandidate").post(aApp.addCandidate);
router.route("/admin/halls").get(aApp.getAllHalls);
router.route("/admin/faculties").get(aApp.getAllFaculties);
router.route("/admin/positions").get(aApp.getAllPositions);
router.route("/admin/results-pub").patch(aApp.makeResultsPublic);
router.route("/admin/results-priv").patch(aApp.makeResultsPrivate);

module.exports = router;
