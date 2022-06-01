/* eslint-disable max-lines-per-function */
const {
  users,
  vdata,
  admin,
  candidates,
  halls,
  faculties,
  positions,
  electionData,
} = require("../db/models");

/**
 * Attempts to find an adin associated with the given email address
 * @function
 * @async
 * @name findAdmin
 * @param {*} email
 * @returns {Object}
 */
module.exports.findAdmin = async function (email) {
  if (email) {
    const adminn = await admin.findOne({
      where: {
        email: email,
      },
    });
    if (adminn) {
      return adminn;
    } else {
      return null;
    }
  } else {
    return 0;
  }
};

/**
 * Attempts to find an adin associated with the given id
 * @function
 * @async
 * @name findAdminById
 * @param {*} aid
 * @returns {Object}
 */
module.exports.findAdminById = async function (aid) {
  if (aid) {
    const adminn = await admin.findOne({
      where: {
        aid: aid,
      },
    });
    if (adminn) {
      return adminn;
    } else {
      return null;
    }
  } else {
    return 0;
  }
};

/**
 * Adds voter to the list of voters
 * @function
 * @async
 * @name addVoter
 * @param {*} email
 * @returns {Number}
 */
module.exports.addVoter = async function (
  email,
  hid,
  fid,
  doesCommute,
  isPostGrad
) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });

    let newVoter;
    let hall;
    let faculty;

    if (!voter) {
      newVoter = await users.create({
        votestatus: false,
      });

      hall = await halls.findOne({
        where: {
          hid: hid,
        },
      });

      faculty = await faculties.findOne({
        where: {
          fid: fid,
        },
      });

      await vdata.create({
        emid: newVoter.uid,
        email: email,
        hall: hall.hallName,
        faculty: faculty.facultyName,
        doesCommute: doesCommute,
        isPostGrad: isPostGrad,
      });
      return 0;
    } else {
      return 1;
    }
  }
  return 2;
};

/**
 * Adds a candidate - someone who is up for a position in the election
 * @function
 * @async
 * @name addCandidate
 * @param {*} fname
 * @param {*} lname
 * @param {*} email
 * @param {*} hid
 * @param {*} fid
 * @param {*} position
 * @param {*} about
 * @returns {Number}
 */
module.exports.addCandidate = async function (
  fname,
  lname,
  email,
  hid,
  fid,
  pid,
  about
) {
  if (email) {
    const candidate = await candidates.findOne({
      where: {
        email: email,
      },
      attributes: ["cid", "email", "hall", "faculty"],
    });

    let hall;
    let faculty;
    let position;

    if (!candidate) {
      hall = await halls.findOne({
        where: {
          hid: hid,
        },
      });

      faculty = await faculties.findOne({
        where: {
          fid: fid,
        },
      });

      position = await positions.findOne({
        where: {
          pid: pid,
        },
      });

      await candidates.create({
        firstName: fname,
        lastName: lname,
        email: email,
        hall: hall.hallName,
        faculty: faculty.facultyName,
        position: position.positionTitle,
        about: about,
      });
      return 0;
    } else {
      return 1;
    }
  }
  return 2;
};

/**
 * Gets all student halls
 * @function
 * @async
 * @name getAllHalls
 * @returns {Array<halls>}
 */
module.exports.getAllHalls = async function () {
  const allHalls = await halls.findAll({
    attributes: ["hid", "hallName"],
  });
  return allHalls;
};

/**
 * Gets all faculties
 * @function
 * @async
 * @name getAllFaculties
 * @returns {Array<faculties>}
 */
module.exports.getAllFaculties = async function () {
  const allFaculties = await faculties.findAll({
    attributes: ["fid", "facultyName"],
  });
  return allFaculties;
};

/**
 * Gets all positions
 * @function
 * @async
 * @name getAllPositions
 * @returns {Array<positions>}
 */
module.exports.getAllPositions = async function () {
  const allPositions = await positions.findAll({
    attributes: ["pid", "positionTitle"],
  });
  return allPositions;
};

/**
 * Inserts the basic election data needed (can be edited later)
 * @function
 * @async
 * @name insertElectionData
 * @param {*} eName
 * @param {*} sDate
 * @param {*} eDate
 * @param {*} csvLocation
 * @returns {Number}
 */
module.exports.insertElectionData = async function (
  eName,
  sDate,
  eDate,
  csvLocation
) {
  if (csvLocation) {
    await electionData.create({
      electionName: eName,
      startDate: sDate,
      endDate: eDate,
      csvLocation: csvLocation,
    });
    return 0;
  } else {
    return 1;
  }
};

/**
 * Function that returns all the candidates participating in the election
 * @function
 * @async
 * @name getAllCandidates
 * @returns {Array<candidates>}
 */
module.exports.getAllCandidates = async function () {
  const allCandidates = await candidates.findAll({
    attributes: ["firstName", "lastName", "email", "position", "noOfVotes"],
  });

  if (allCandidates.length > 0) {
    return allCandidates;
  } else {
    return 1;
  }
};
