const {
  users,
  vdata,
  candidates,
  positions,
  halls,
  faculties,
} = require("../db/models");

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
 *
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
 *
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

      if (voter.hall == hall.facultyName) {
        return true;
      } else {
        return false;
      }
    }
    return 1;
  }
  return 1;
};
