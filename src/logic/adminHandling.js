const { users, vdata, admin, candidateinfo } = require("../db/models");

/**
 *
 * @param {*} email
 * @returns
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
 * @returns
 */
module.exports.addVoter = async function (email, hall) {
  if (email) {
    const voter = await vdata.findOne({
      where: {
        email: email,
      },
    });
    let newVoter;
    if (!voter) {
      newVoter = await users.create({
        votestatus: false,
      });
      newVoter = await vdata.create({
        emid: newVoter.uid,
        email: email,
        hall: hall
      });
      return 1;
    } else {
      return 0;
    }
  }
  return 2;
};

// module.exports.addCandidate = async function (fname, lname, hall, faculty, position, about){
//   if (fname){

//   }
// };
