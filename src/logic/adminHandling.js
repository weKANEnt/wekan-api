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
 *
 * @param {*} email
 * @returns the admin  object if the admin exists
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
 * @param {*} email
 * @returns 0 if  the insert was successful
 */
module.exports.addVoter = async function (email, hid, fid, doesCommute) {
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

      newVoter = await vdata.create({
        emid: newVoter.uid,
        email: email,
        hall: hall.hallName,
        faculty: faculty.facultyName,
        doesCommute: doesCommute,
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
 * @param {*} fname
 * @param {*} lname
 * @param {*} email
 * @param {*} hid
 * @param {*} fid
 * @param {*} position
 * @param {*} about
 * @returns 0 if the insert was successful
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

      console.log(faculty);
      const newCandidate = await candidates.create({
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
 * @returns
 */
module.exports.getAllHalls = async function () {
  const allHalls = await halls.findAll({
    attributes: ["hid", "hallName"],
  });
  return allHalls;
};

/**
 * Gets all faculties
 * @returns
 */
module.exports.getAllFaculties = async function () {
  const allFaculties = await faculties.findAll({
    attributes: ["fid", "facultyName"],
  });
  return allFaculties;
};

/**
 * Gets all positions
 * @returns
 */
module.exports.getAllPositions = async function () {
  const allPositions = await positions.findAll({
    attributes: ["pid", "positionTitle"],
  });
  return allPositions;
};

/**
 * Inserts the basic election data needed (can be edited later)
 * @param {*} eName
 * @param {*} sDate
 * @param {*} eDate
 * @param {*} csvLocation
 * @returns
 */
module.exports.insertElectionData = async function (
  eName,
  sDate,
  eDate,
  csvLocation
) {
  if (csvLocation) {
    const election = await electionData.create({
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
