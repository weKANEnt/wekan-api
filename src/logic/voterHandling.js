const TypeOverrides = require("pg/lib/type-overrides");
const { users, vdata } = require("../db/models");
// const config = require("../../../config/env");

/**
 * Checks if a user with given email exists in database
 * @async
 * @param {string} email
 * @returns boolean
 */
module.exports.isRegistered = async function (email) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });
    if (voter) {
      return true;
    } else {
      return false;
    }
  } else {
    return 0;
  }
};

/**
 * Updates the vote status of a given user with the given status
 * @async
 * @param {string} uid
 * @param {boolean} vStat
 * @returns -
 */
module.exports.updateVoteStatus = async function (id, vStat) {
  if (id & vStat) {
    await users.upsert({
      uid: id,
      votestatus: vStat,
    });
  } else {
    return 0;
  }
};

/**
 * Checks if given voter's vote status
 * @async
 * @param {*} email
 * @returns object
 */
module.exports.hasVoted = async function (id) {
  if (id) {
    const voter = await vdata.findOne({
      where: {
        emid: id,
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
 *
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
 * @param {*} otp
 * @returns
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
 * @param {*} email
 * @param {*} otp
 * @returns
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
      return true;
    } else {
      return false;
    }
  }
  return 1;
};
