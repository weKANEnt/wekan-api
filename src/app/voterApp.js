const voter = require("../logic/voterHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const electionHandler = require("../helpers/electionHas");
const election = require("../logic/electionHandling");
const optGen = require("../helpers/generateOTP");
const transport = require("../helpers/transport")();
const mail = require("../helpers/createOTPEmail");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");

// Small helper
function success(email) {
  return {
    success: true,
    message: "OTP Generated",
    email: email,
  };
}

function successT(token) {
  return {
    success: true,
    message: "OTP matches.",
    token: `JWT ${token}`,
  };
}

/**
 * Checks if given email is registered to vote
 * @function
 * @async
 * @name isVoterRegistered
 * @param {*} req
 * @param {*} res
 * @returns {Promise}
 */
module.exports.isVoterRegistered = async function (req, res) {
  const { email } = req.query;
  if (!email) {
    res.status(401).json(errorHandler.missingField);
    return;
  }

  const vEmail = validate.valEmail(email);

  if (vEmail) {
    try {
      const vote = await voter.isRegistered(email);
      if (vote === false) {
        res.status(401).json(errorHandler.emailUnregistered);
        return;
      } else if (vote) {
        res
          .status(200)
          .json(successHandler(true, "Email is registered to vote"));
        return;
      } else {
        res.status(500).json(errorHandler.serverError);
        return;
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else if (vEmail !== true) {
    res.status(401).json(errorHandler.emailValidation);
    return;
  } else {
    res.status(500).json(errorHandler.serverError);
    return;
  }
};

/**
 * Function returns a unique OTP for a user to access their ballot
 * Need to add a check to see if the user has already voted
 * @function
 * @async
 * @name generate
 * @param {*} req
 * @param {*} res
 * @fires transport
 * @return {Promise}
 */
module.exports.generateOTP = async function (req, res) {
  const { email } = req.body;
  const electionDetails = await election.selectElection();
  const vEmail = validate.valEmail(email);

  if (vEmail) {
    if (electionDetails.length === 0) {
      res.status(500).json(errorHandler.electionNotActive);
      return;
    } else if (electionDetails.length === 1) {
      const hasStarted = electionHandler.hasElectionStarted(
        electionDetails[0].startDate
      );
      const hasEnded = electionHandler.hasElectionEnded(
        electionDetails[0].endDate
      );
      if (hasStarted === true && hasEnded === false) {
        try {
          let otp;
          otp = optGen.generateOTP();
          const isOTP = await voter.doesOTPExist(otp);
          const hasVoted = await voter.hasVoted(email);
          if (isOTP === false && hasVoted === false) {
            try {
              const addOTP = await voter.insertOTP(email, otp);
              if (addOTP === false) {
                res.status(422).json(errorHandler.queryError);
                return;
              } else if (addOTP === true) {
                await transport.sendMail(mail(config.email, email, otp));
                res.status(200).json(success(email));
                return;
              } else if (addOTP === 1) {
                res.status(422).json(errorHandler.queryError);
                return;
              }
            } catch (err) {
              res.status(500).json(errorHandler.emailUnregistered);
              return;
            }
          } else if (isOTP === true) {
            res.status(422).json(errorHandler.causingDuplicate);
            return;
          } else if (hasVoted === true) {
            res.status(401).json(errorHandler.userHasVoted);
            return;
          } else if (isOTP === 1) {
            res.status(500).json(errorHandler.queryError);
            return;
          }
        } catch (err) {
          res.status(500).json(errorHandler.serverError);
          return;
        }
      } else if (hasStarted === false) {
        res.status(400).json(errorHandler.electionNotStarted);
        return;
      } else if (hasEnded === true) {
        res.status(400).json(errorHandler.electionEnded);
        return;
      } else {
        res.status(400).json(errorHandler.generalValidation);
        return;
      }
    }
  } else {
    res.status(400).json(errorHandler.emailValidation);
    return;
  }
};

/**
 * Function to evaluate whether the given otp is the recorded otpf or the given email
 * @function
 * @async
 * @name isOTPMatch
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.isOTPMatch = async function (req, res) {
  const { otp, email } = req.query;
  if (!(email && otp)) {
    res.status(503).json(errorHandler.missingField);
    return;
  }
  const vOTP = validate.valOTP(otp);

  if (vOTP) {
    try {
      const otpStat = await voter.doesOTPMatchEntry(email, otp);
      if (otpStat) {
        const token = jwt.sign(
          {
            id: otpStat.ccid,
            email: otpStat.email,
          },
          config.jwt_key,
          {
            expiresIn: "1hr",
          }
        );
        res.status(200).json(successT(token));
        return;
      } else if (otpStat === false) {
        res.status(401).json(errorHandler.incorrectOTP);
        return;
      } else if (otpStat === 1) {
        res.status(400).json(errorHandler.queryError);
        return;
      }
    } catch (err) {
      res.status(404).json(errorHandler.noOTPGen);
      return;
    }
  } else if (vOTP != true) {
    res.status(401).json(errorHandler.otpValidation);
    return;
  } else {
    res.status(500).json(errorHandler.serverError);
    return;
  }
};
