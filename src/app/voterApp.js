const voter = require("../logic/voterHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const optGen = require("../helpers/generateOTP");
const transport = require("../helpers/transport")();
const mail = require("../helpers/createOTPEmail");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");

//Small helper
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
 * @async
 * @param {*} req
 * @param {*} res
 * @returns res
 */
module.exports.isVoterRegistered = async function (req, res) {
  const { email } = req.body;
  if (!email) {
    res.status(503).json(errorHandler.missingField);
  }

  const vEmail = validate.valEmail(email);

  if (vEmail) {
    try {
      const vote = await voter.isRegistered(email);
      if (vote === false) {
        res.status(401).json(errorHandler.emailUnregistered);
      } else if (vote === true) {
        res
          .status(200)
          .json(successHandler(true, "Email is registered to vote"));
      } else {
        res.status(500).json(errorHandler.serverError);
      }
    } catch (err) {
      res.status(500).json(errorHandler.queryError);
    }
  } else if (vEmail != true) {
    res.status(401).json(errorHandler.emailValidation);
  } else {
    res.status(500).json(errorHandler.serverError);
  }
};

/**
 * Function returns a unique OTP for a user to access their ballot
 * Need to add a check to see if the user has already voted
 * @param {*} req
 * @param {*} res
 */
module.exports.generateOTP = async function (req, res) {
  const { email } = req.body;
  let otp;
  otp = optGen.generateOTP();
  try {
    const isOTP = await voter.doesOTPExist(otp);
    if (isOTP === false) {
      try {
        const addOTP = await voter.insertOTP(email, otp);
        if (addOTP === false) {
          res.status(422).json(errorHandler.queryError);
        } else if (addOTP === true) {
          await transport.sendMail(mail(config.email, email, otp));
          res.status(200).json(success(email));
        } else if (addOTP === 1) {
          res.status(422).json(errorHandler.queryError);
        }
      } catch (err) {
        res.status(500).json(errorHandler.emailUnregistered);
      }
    } else if (isOTP === true) {
      res.status(422).json(errorHandler.causingDuplicate);
    } else if (isOTP === 1) {
      res.status(500).json(errorHandler.queryError);
    }
  } catch (err) {
    res.status(500).json(errorHandler.serverError);
  }
};

/**
 * Function to evaluate whether the given otp is the recorded otpf or the given email
 * @param {*} req
 * @param {*} res
 */
module.exports.isOTPMatch = async function (req, res) {
  const { otp, email } = req.body;
  if (!(email && otp)) {
    res.status(503).json(errorHandler.missingField);
  }
  const vOTP = validate.valOTP(otp);
  console.log(vOTP);

  if (vOTP) {
    try {
      const otpStat = await voter.doesOTPMatchEntry(email, otp);
      console.log(otpStat);
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
      } else if (otpStat === false) {
        res.status(401).json(errorHandler.incorrectOTP);
      } else if (otpStat === 1) {
        res.status(500).json(errorHandler.queryError);
      }
    } catch (err) {
      res.status(500).json(errorHandler.queryError);
    }
  } else if (vOTP != true) {
    res.status(401).json(errorHandler.otpValidation);
  } else {
    res.status(500).json(errorHandler.serverError);
  }
};
