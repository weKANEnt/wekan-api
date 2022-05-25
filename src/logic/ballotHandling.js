const {
  users,
  vdata,
  candidates,
  positions,
  halls,
  faculties,
  tallyinfo,
} = require("../db/models");

/**
 *Function gets candidates in given category
 * @param {*} posNo 
 * @returns 
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
 * @param {*} id
 * @param {*} fid
 * @returns
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

      if (voter.faculty == faculty.facultyName) {
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
 * @param {*} id
 * @param {*} hid
 * @returns
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

      if (voter.hall == hall.hallName) {
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
 * @param {*} cids
 */
module.exports.insertBallotInfo = async function (cids) {
  if (cids) {
    for (var c = 0; c < cids.length; c++) {
      const candidate = await candidates.findOne({
        where: {
          cid: cids[c],
        },
      });
      var up = candidate.noOfVotes + 1;

      await candidates.upsert({
        cid: candidate.cid,
        noOfVotes: up,
      });
    }
    return 0;
  }
  return 1;
};
