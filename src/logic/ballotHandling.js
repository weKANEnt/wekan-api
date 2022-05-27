const {
  vdata,
  candidates,
  positions,
  halls,
  faculties,
} = require("../db/models");

/**
 *Function gets candidates in given category
 * @function
 * @async
 * @name selectRequestedCandidates
 * @param {*} posNo
 * @returns {Object}
 */
module.exports.selectRequestedCandidates = async function (posNo) {
  if (posNo) {
    const position = await positions.findOne({
      where: {
        pid: posNo,
      },
    });

    const candidatess = await candidates.findAll({
      where: {
        position: position.positionTitle,
      },
    });

    return candidatess;
  }
  return 1;
};

/**
 * Function checks to see if voter is in given faculty
 * @function
 * @async
 * @name isInFaculty
 * @param {*} id
 * @param {*} fid
 * @returns {Boolean}
 */
module.exports.isInFaculty = async function (id, fid) {
  if (id) {
    const voter = await vdata.findOne({
      where: {
        ccid: id,
      },
    });

    if (fid) {
      const faculty = await faculties.findOne({
        where: {
          fid: fid,
        },
      });

      if (voter.faculty === faculty.facultyName) {
        return true;
      } else {
        return false;
      }
    }
    return 1;
  }
  return 1;
};

/**
 * Function checks to see if voter is in given hall
 * @function
 * @async
 * @name isInHall
 * @param {*} id
 * @param {*} hid
 * @returns {Boolean}
 */
module.exports.isInHall = async function (id, hid) {
  if (id) {
    const voter = await vdata.findOne({
      where: {
        ccid: id,
      },
    });

    if (hid) {
      const hall = await halls.findOne({
        where: {
          hid: hid,
        },
      });

      if (voter.hall === hall.hallName) {
        return true;
      } else {
        return false;
      }
    }
    return 1;
  }
  return 1;
};

/**
 * Takes in a list of candudate ids and increments their vote count
 * @function
 * @async
 * @name insertBallotInfo
 * @param {*} cids
 * @return {Boolean}
 */
module.exports.insertBallotInfo = async function (cids) {
  if (cids) {
    for (let c = 0; c < cids.length; c++) {
      const candidate = await candidates.findOne({
        where: {
          cid: cids[c],
        },
      });
      const up = candidate.noOfVotes + 1;

      await candidates.upsert({
        cid: candidate.cid,
        noOfVotes: up,
      });
    }
    return 0;
  }
  return 1;
};
