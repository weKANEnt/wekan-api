const admin = require("../logic/adminHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const getToken = require("../helpers/getToken");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");
const bcrypt = require("bcrypt");

//Small helper
function success(token) {
  return {
    success: true,
    message: "Successful login.",
    token: `JWT ${token}`,
  };
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.loginAdmin = async function (req, res) {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(503).json(errorHandler.emptyParam);
    return 1;
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
          console.log(config.jwt_key)
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
          console.log(token)
          res.status(200).json(success(token));
        }
      } else {
        res.status(500).json(errorHandler.serverError);
        return 1;
      }
    } catch (err) {
      res.status(500).json(errorHandler.jwtError);
      return 1;
    }
  } else if (vEmail !== true || vPassword !== true) {
    res.status(401).json(errorHandler.emailValidation);
    return 1;
  } else {
    res.status(500).json(errorHandler.serverError);
    return 0;
  }
};

/**
 * Function to register a voter given that the given email is not currently registered
 * Need to add that email should not be in admin table
 * @param {*} req
 * @param {*} res
 */
module.exports.registerVoter = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
    return 1;
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);
    const { email, hall, faculty, doesCommute, isPostGrad } = req.body;

    if (payload && payload.id) {
      const adminn = await admin.findAdminById(payload.id);
      if (!adminn) {
        res.status(401).json(errorHandler.noAdmins);
        return 1;
      } else if (adminn) {
        if ( !(email && hall && faculty  && doesCommute && isPostGrad)) {
          res.status(400).json(errorHandler.emptyParam);
          return 1;
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
                return 0;
              } else if (addVoter === 1) {
                res.status(422).json(errorHandler.causingDuplicate);
                return 1;
              } else if (addVoter === 2) {
                res.status(500).json(errorHandler.emptyParam);
                return 1;
              } else {
                res.status(500).json(errorHandler.serverError);
                return 1;
              }
            } catch (err) {
              res.status(500).json(errorHandler.queryError);
              return 1;
            }
          } else if (
            vEmail != true ||
            !Number.isInteger(hall) ||
            !Number.isInteger(faculty) ||
            !(doesCommute === true || doesCommute === false) ||
            !(isPostGrad === true || isPostGrad === false)
          ) {
            res.status(401).json(errorHandler.generalValidation);
            return 1;
          } else {
            res.status(500).json(errorHandler.serverError);
            return 1;
          }
        }
      } else {
        res.status(500).json(errorHandler.serverError);
        return 1;
      }
    } else {
      res.status(500).json(errorHandler.jwtError);
      return 1;
    }
  }
};

/**
 * Function to return all halls in the UWI
 * @param {*} req
 * @param {*} res
 */
module.exports.getAllHalls = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      try {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
        } else if (adminn) {
          const allHalls = await admin.getAllHalls();
          if (allHalls) {
            res.status(200).json(successHandler(true, allHalls));
          } else {
            res.status(500).json(errorHandler.serverError);
          }
        }
      } catch (err) {
        res.status(500).json(errorHandler.serverError);
      }
    }
  }
};

/**
 * Function to return all faculties in the UWI
 * @param {*} req
 * @param {*} res
 */
module.exports.getAllFaculties = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      try {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
        } else if (adminn) {
          const allFaculties = await admin.getAllFaculties();
          if (allFaculties) {
            res.status(200).json(successHandler(true, allFaculties));
          } else {
            res.status(500).json(errorHandler.serverError);
          }
        }
      } catch (err) {
        res.status(500).json(errorHandler.serverError);
      }
    }
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
module.exports.getAllPositions = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      try {
        const adminn = await admin.findAdminById(payload.id);
        if (!adminn) {
          res.status(401).json(errorHandler.noAdmins);
        } else if (adminn) {
          const allPositions = await admin.getAllPositions();
          if (allPositions) {
            res.status(200).json(successHandler(true, allPositions));
          } else {
            res.status(500).json(errorHandler.serverError);
          }
        }
      } catch (err) {
        res.status(500).json(errorHandler.serverError);
      }
    }
  }
};

/**
 * Function to add a people who are up for a position in the election - aka a candidates
 * @param {*} req
 * @param {*} res
 */
module.exports.addCandidate = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);
    //const { firstName, lastName, email, hall, faculty, position, about }= req.body
    const { candidates } = req.body;
    if (payload && payload.id) {
      const adminn = await admin.findAdminById(payload.id);
      if (!adminn) {
        res.status(401).json(errorHandler.noAdmins);
      } else if (adminn) {
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
                console.log(addCandidate);
              } catch (err) {
                res.status(500).json(errorHandler.queryError);
              }
            } else if (!vEmail || !vFname || !vLname) {
              res.status(401).json(errorHandler.genValidation);
            } else {
              res.status(500).json(errorHandler.serverError);
            }
          }
        }
        if (addSum === 0) {
          res
            .status(200)
            .json(successHandler(true, "All candidates added successfully"));
        } else if (addSum < 0) {
          res.status(400).json(errorHandler.serverError);
        } else {
          res.status(400).json(errorHandler.cannotAddCandidate);
        }
      }
    }
  }
};
