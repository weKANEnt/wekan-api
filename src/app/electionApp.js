/* eslint-disable max-lines-per-function */
const admin = require("../logic/adminHandling");
const election = require("../logic/electionHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const getToken = require("../helpers/getToken");
const electionHandler = require("../helpers/electionHas");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");

// small helper
function electionSuccess(results) {
  return {
    success: true,
    message: "Election Results",
    results: results,
  };
}

/**
 * @function
 * @name createElection
 * @description  Create an election object in db using given details
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 * Need to add validation for cvs location
 */
module.exports.createElection = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      console.log(config.jwt_key)
      const { title, sDate, eDate, csvLocation } = req.body;

      if (payload && payload.id) {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
        } else if (adminn) {
          if (!(title && sDate && eDate)) {
            res.status(400).json(errorHandler.emptyParam);
          } else {
            const vTitle = validate.valAlphanumeric(title);
            const vSDate = validate.valDate(sDate);
            const vEDate = validate.valDate(eDate);
            const vSEDate = validate.val2Dates(sDate, eDate);
            const electionn = await election.selectElection();

            if (vTitle && vSDate && vEDate && vSEDate) {
              if (electionn.length == 0) {
                try {
                  const addElection = await election.insertElection(
                    title,
                    sDate,
                    eDate,
                    csvLocation
                  );
                  if (addElection === 0) {
                    res
                      .status(201)
                      .json(successHandler(true, "Election created"));
                    return;
                  } else if (addElection === 1) {
                    res.status(500).json(errorHandler.emptyParam);
                    return;
                  } else {
                    res.status(500).json(errorHandler.serverError);
                    return;
                  }
                } catch (err) {
                  res.status(500).json(errorHandler.queryError);
                  return;
                }
              } else if (electionn.length > 0) {
                res.status(422).json(errorHandler.electionAlreadyExists);
                return;
              }
            } else if (!vTitle || !vSDate || !vEDate || !vSEDate) {
              res.status(400).json(errorHandler.generalValidation);
              return;
            }
          }
        } else {
          res.status(500).json(errorHandler.serverError);
          return;
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * @function
 * @name deleteElection
 * @description Delete an election from the db
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.deleteElection = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
        } else if (adminn) {
          try {
            const removeElection = await election.deleteElection();
            if (removeElection === 0) {
              res.status(200).json(successHandler(true, "Election deleted."));
            } else if (removeElection === 1) {
              res.status(422).json(errorHandler.nothingToRemove);
              return;
            } else {
              res.status(500).json(errorHandler.queryError);
              return;
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
          }
        } else {
          res.status(500).json(errorHandler.serverError);
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Function generates the overall election results from the candidates table
 * @function
 * @name generateElectionResults
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
module.exports.generateElectionResults = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
          return;
        } else if (adminn) {
          const electionDetails = await election.selectElection();
          if (electionDetails.length === 0) {
            res.status(500).json(errorHandler.serverError);
            return;
          } else if (electionDetails.length === 1) {
            const hasEnded = electionHandler.hasElectionEnded(
              electionDetails[0].endDate
            );
            if (hasEnded === true) {
              const allCandidates = await admin.getAllCandidates();
              if (allCandidates.length === 0) {
                res.status(404).json(errorHandler.noCandidates);
                return;
              } else if (allCandidates.length > 0) {
                var results = [];
                var out;
                for (let c = 0; c < allCandidates.length; c++) {
                  var fullName =
                    allCandidates[c].firstName +
                    " " +
                    allCandidates[c].lastName;
                  out = await election.insertResults(
                    fullName,
                    allCandidates[c].email,
                    allCandidates[c].position,
                    allCandidates[c].noOfVotes
                  );
                  results.push(out);
                }
                if (results.includes(1)) {
                  res.status(500).json(errorHandler.queryError);
                  return;
                } else if (!results.includes(1)) {
                  res
                    .status(200)
                    .json(
                      successHandler(
                        true,
                        "Election results successfully generated"
                      )
                    );
                  return;
                } else {
                  res.status(500).json(errorHandler.serverError);
                  return;
                }
              } else {
                res.status(500).json(errorHandler.serverError);
                return;
              }
            } else if (hasEnded === false) {
              res.status(422).json(errorHandler.electionNotEnded);
              return;
            } else {
              res.status(400).json(errorHandler.generalValidation);
              return;
            }
          }
        }
      } else {
        res.status(401).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Function which gets the finalized election results after they have been posted (does not need admin)
 * @function
 * @async
 * @param {*} req
 * @param {*} res
 * @returns {Array}
 */
module.exports.getElelectionResults = async function (req, res) {
  try {
    const stat = await election.selectPostedStatus();
    if (stat.postResults === false) {
      res.status(404).json(errorHandler.resultsUnavailable);
      return;
    } else if (stat.postResults === true) {
      const results = await election.selectElectionResults();
      if (results.length > 0) {
        res.status(200).json(electionSuccess(results));
        return;
      } else {
        res.status(404).json(errorHandler.noElectionResults);
        return;
      }
    } else {
      res.status(500).json(errorHandler.serverError);
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.electionNotActive);
    return;
  }
};

module.exports.getElelectionResultsA = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
          return;
        } else if (adminn) {
          const electionDetails = await election.selectElection();
          if (electionDetails.length === 0) {
            res.status(401).json(errorHandler.noElectionResults);
            return;
          } else if (electionDetails.length === 1) {
            const hasEnded = electionHandler.hasElectionEnded(
              electionDetails[0].endDate
            );
            if (hasEnded === true) {
              const results = await election.selectElectionResults();
              if (results.length > 0) {
                res.status(200).json(electionSuccess(results));
                return;
              } else {
                res.status(404).json(errorHandler.noElectionResults);
                return;
              }
            } else if (hasEnded === false) {
              res.status(422).json(errorHandler.electionNotEnded);
              return;
            } else {
              res.status(400).json(errorHandler.generalValidation);
              return;
            }
          }
        }
      } else {
        res.status(401).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};
