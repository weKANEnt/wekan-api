const admin = require("../logic/adminHandling");
const election = require("../logic/electionHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const electionHandler = require("../helpers/electionHas");
const getToken = require("../helpers/getToken");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");
const bcrypt = require("bcrypt");

// Small helper
function success(token) {
  return {
    success: true,
    message: "Successful login.",
    token: `JWT ${token}`,
  };
}

/**
 * Function to allow admin to login to admin portal to access admin functionality
 * @function
 * @async
 * @name loginAdmin
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
module.exports.loginAdmin = async function (req, res) {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(503).json(errorHandler.emptyParam);
    return;
  }
  const vEmail = validate.valEmail(email);
  const vPassword = validate.valPassword(password);

  if (vPassword && vEmail) {
    try {
      const adminn = await admin.findAdmin(email);
      if (!adminn) {
        res.status(401).json(errorHandler.noAdmins);
      } else if (adminn) {
        if (bcrypt.compareSync(password, adminn.password)) {
          const token = jwt.sign(
            {
              id: adminn.aid,
              email: adminn.email,
            },
            config.jwt_key,
            {
              expiresIn: "1h",
            }
          );
          res.status(200).json(success(token));
          return;
        }
      } else {
        res.status(500).json(errorHandler.serverError);
        return;
      }
    } catch (err) {
      res.status(500).json(errorHandler.jwtError);
    }
  } else if (vEmail !== true || vPassword !== true) {
    res.status(401).json(errorHandler.generalValidation);
  } else {
    res.status(500).json(errorHandler.serverError);
  }
};

/**
 * @function
 * @name registerVoter
 * @description Function to register a voter given that the given email is not currently registered
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 * Need to add that email should not be in admin table
 */
module.exports.registerVoter = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      const { email, hall, faculty, doesCommute, isPostGrad } = req.body;

      if (payload && payload.id) {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
        } else if (adminn) {
          if (!(email && hall && faculty)) {
            res.status(400).json(errorHandler.emptyParam);
          } else {
            const vEmail = validate.valEmail(email);

            if (
              vEmail &&
              Number.isInteger(hall) &&
              Number.isInteger(faculty) &&
              (doesCommute === true || doesCommute === false) &&
              (isPostGrad === true || isPostGrad === false)
            ) {
              try {
                const addVoter = await admin.addVoter(
                  email,
                  hall,
                  faculty,
                  doesCommute,
                  isPostGrad
                );
                if (addVoter === 0) {
                  res
                    .status(200)
                    .json(successHandler(true, "Voter added successfully"));
                  return;
                } else if (addVoter === 1) {
                  res.status(422).json(errorHandler.causingDuplicate);
                  return;
                } else if (addVoter === 2) {
                  res.status(500).json(errorHandler.emptyParam);
                  return;
                } else {
                  res.status(500).json(errorHandler.serverError);
                  return;
                }
              } catch (err) {
                res.status(500).json(errorHandler.queryError);
              }
            } else if (
              vEmail != true ||
              !Number.isInteger(hall) ||
              !Number.isInteger(faculty) ||
              !(doesCommute === true || doesCommute === false) ||
              !(isPostGrad === true || isPostGrad === false)
            ) {
              res.status(401).json(errorHandler.generalValidation);
            } else {
              res.status(500).json(errorHandler.serverError);
            }
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
 * @function
 * @name getAllHalls
 * @description Function to return all halls in the UWI
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getAllHalls = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      
      if (payload && payload.id) {
        try {
          const adminn = await admin.findAdminById(payload.id);
          if (!adminn) {
            res.status(401).json(errorHandler.noAdmins);
            return;
          } else if (adminn) {
            const allHalls = await admin.getAllHalls();
            if (allHalls) {
              res.status(200).json(successHandler(true, allHalls));
              return;
            } else {
              res.status(500).json(errorHandler.serverError);
              return;
            }
          }
        } catch (err) {
          res.status(500).json(errorHandler.serverError);
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
 * @name getAllFaculties
 * @description Function to return all faculties in the UWI
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getAllFaculties = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        try {
          const adminn = await admin.findAdminById(payload.id);
          if (!adminn) {
            res.status(401).json(errorHandler.noAdmins);
            return;
          } else if (adminn) {
            const allFaculties = await admin.getAllFaculties();
            if (allFaculties) {
              res.status(200).json(successHandler(true, allFaculties));
              return;
            } else {
              res.status(500).json(errorHandler.serverError);
              return;
            }
          }
        } catch (err) {
          res.status(500).json(errorHandler.serverError);
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
 * @name getAllPositions
 * @description gets all the positions for the uwi guild election
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getAllPositions = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        try {
          const adminn = await admin.findAdminById(payload.id);
          if (!adminn) {
            res.status(401).json(errorHandler.noAdmins);
            return;
          } else if (adminn) {
            const allPositions = await admin.getAllPositions();
            if (allPositions) {
              res.status(200).json(successHandler(true, allPositions));
              return;
            } else {
              res.status(500).json(errorHandler.serverError);
              return;
            }
          }
        } catch (err) {
          res.status(500).json(errorHandler.serverError);
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
 * @name addCandidate
 * @description Function to add a people who are up for a position in the election - aka a candidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.addCandidate = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      const { candidates } = req.body;

      if (payload && payload.id) {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
          return;
        } else if (adminn) {
          try {
            for (let c = 0; c < candidates.length; c++) {
              if (
                !(
                  candidates[c].firstName &&
                  candidates[c].lastName &&
                  candidates[c].email &&
                  candidates[c].hall &&
                  candidates[c].faculty &&
                  candidates[c].position &&
                  candidates[c].about
                )
              ) {
                res.status(400).json(errorHandler.emptyFields);
                return;
              } else {
                const vEmail = validate.valEmail(candidates[c].email);
                const vFname = validate.valName(candidates[c].firstName);
                const vLname = validate.valName(candidates[c].lastName);

                var addCandidate;
                var addSum = 0;
                if (vEmail && vFname && vLname) {
                  try {
                    addCandidate = await admin.addCandidate(
                      candidates[c].firstName,
                      candidates[c].lastName,
                      candidates[c].email,
                      candidates[c].hall,
                      candidates[c].faculty,
                      candidates[c].position,
                      candidates[c].about
                    );
                    addSum = addSum + addCandidate;
                  } catch (err) {
                    res.status(400).json(errorHandler.queryError);
                    return;
                  }
                } else if (!vEmail || !vFname || !vLname) {
                  res.status(401).json(errorHandler.genValidation);
                  return;
                } else {
                  res.status(500).json(errorHandler.serverError);
                  return;
                }
              }
            }
            if (addSum === 0) {
              res
                .status(200)
                .json(
                  successHandler(true, "All candidates added successfully")
                );
              return;
            } else if (addSum < 0) {
              res.status(400).json(errorHandler.serverError);
              return;
            } else {
              res.status(400).json(errorHandler.cannotAddCandidate);
              return;
            }
          } catch (err) {
            res.status(400).json(errorHandler.missingField);
            return;
          }
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
 * Makes the results of an election public
 * @function
 * @async
 * @name makeResultsPublic
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.makeResultsPublic = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      if (payload && payload.id) {
        try {
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
                const results = await election.updatePostResults(1, true);
                if (results === 0) {
                  res
                    .status(200)
                    .json(
                      successHandler(
                        true,
                        "Election results have now been posted"
                      )
                    );
                  return;
                } else if (results === 1) {
                  res.status(400).json(errorHandler.queryError);
                  return;
                }
              } else if (hasEnded === false) {
                res.status(400).json(errorHandler.electionNotEnded);
                return;
              } else {
                res.status(400).json(errorHandler.generalValidation);
                return;
              }
            }
          } else {
            res.status(500).json(errorHandler.serverError);
            return;
          }
        } catch (err) {
          res.status(400).json(errorHandler.queryError);
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
 * Makes the resuts of an election private
 * @function
 * @async
 * @name makeResultsPrivate
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.makeResultsPrivate = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        try {
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
                console.log("Election");
                const results = await election.updatePostResults(1, false);
                console.log(results);
                if (results === 0) {
                  res
                    .status(200)
                    .json(
                      successHandler(
                        true,
                        "Election results have now been made private"
                      )
                    );
                } else if (results === 1) {
                  res.status(400).json(errorHandler.queryError);
                  return;
                }
              } else if (hasEnded === false) {
                res.status(400).json(errorHandler.electionNotEnded);
                return;
              } else {
                res.status(400).json(errorHandler.generalValidation);
                return;
              }
            }
          } else {
            res.status(500).json(errorHandler.serverError);
            return;
          }
        } catch (err) {
          res.status(400).json(errorHandler.queryError);
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
