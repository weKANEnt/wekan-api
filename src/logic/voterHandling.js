const TypeOverrides = require("pg/lib/type-overrides");
const { users, vdata } = require("../db/models");
// const config = require("../../../config/env");

/**
 * Checks if a user with given email exists in database
 * @function
 * @async
 * @name isRegistered
 * @param {string} email
 * @returns {Boolean}
 */
module.exports.isRegistered = async function (email) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });
    if (voter) {
      return voter;
    } else {
      return false;
    }
  } else {
    return 0;
  }
};

/**
 * Updates the vote status of a given user with the given status
 * @function
 * @async
 * @name updateVoteStatus
 * @param {string} uid
 * @param {boolean} vStat
 * @returns {Number}
 */
module.exports.updateVoteStatus = async function (id, vStat) {
  if (id){
    if (vStat) {
      const voter = await vdata.findOne({
        where: {
          ccid: id,
        },
      });

      await users.upsert({
        uid: voter.ccid,
        votestatus: vStat,
      });
      return 0;
    }
    return 1;
  }
  return 1;
};

/**
 * Checks if given voter's vote status
 * @function
 * @async
 * @name hasVoted
 * @param {*} email
 * @returns {Boolean}
 */
module.exports.hasVoted = async function (email) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });

    const voterData = await users.findOne({
      where: {
        uid: voter.emid,
      },
    });
    return voterData.votestatus;
  } else {
    return 0;
  }
};

/**
 * Function that inserts a generated OTP into the user with the given email
 * @function
 * @async
 * @name insertOTP
 * @param {*} email
 * @param {*} otp
 * @returns {Boolean}
 */
module.exports.insertOTP = async function (email, otp) {
  if ((email != undefined) & (otp != undefined)) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });

    const voterData = await users.findOne({
      where: {
        uid: voter.emid,
      },
    });

    if (voterData) {
      await users.upsert({
        uid: voterData.uid,
        OTP: otp,
      });

      return true;
    } else {
      return false;
    }
  } else {
    return 1;
  }
};

/**
 * Function that checks if a generated OTP already exists for any voter
 * @function
 * @async
 * @name doesOTPExist
 * @param {*} otp
 * @returns {Boolean}
 */
module.exports.doesOTPExist = async function (otp) {
  if (otp) {
    const voter = await users.findOne({
      where: {
        OTP: otp,
      },
    });
    if (voter) {
      return true;
    } else {
      return false;
    }
  }
  return 1;
};

/**
 * Function that checks if the given emaila nd otp exist for the same record
 * @function
 * @async
 * @name doesOTPMatchEntry
 * @param {*} email
 * @param {*} otp
 * @returns {Object}
 */
module.exports.doesOTPMatchEntry = async function (email, otp) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });

    const voterData = await users.findOne({
      where: {
        uid: voter.emid,
      },
    });

    if (voterData.OTP === otp) {
      return voter;
    } else {
      return false;
    }
  }
  return 1;
};
