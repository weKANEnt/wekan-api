const { electiondata, tallyinfo } = require("../db/models");

/**
 * Adds election
 * @function
 * @async
 * @name insertElection
 * @param {*} title
 * @param {*} sDate
 * @param {*} eDate
 * @param {*} csvLocation
 * @returns {Number}
 */
module.exports.insertElection = async function (
  title,
  sDate,
  eDate,
  csvLocation
) {
  if (title) {
    if (sDate) {
      if (eDate) {
        if (csvLocation) {
          await electiondata.create({
            electionName: title,
            startDate: sDate,
            endDate: eDate,
            csvLocation: csvLocation,
          });
          return 0;
        }
        return 1;
      }
      return 1;
    }
    return 1;
  }
  return 1;
};

/**
 * Finds an election
 * @function
 * @async
 * @name selectElection
 * @param {*} elid
 * @returns {Object}
 */
module.exports.selectElection = async function (elid = 1) {
  if (elid) {
    const election = await electiondata.findAll({});
    return election;
  }
  return 1;
};

/**
 * Removes an election
 * @function
 * @async
 * @name deleteElection
 * @param {*} elid
 * @returns {Number}
 */
module.exports.deleteElection = async function (elid = 1) {
  if (elid) {
    const election = await electiondata.findOne({});

    if (election) {
      await electiondata.destroy({
        where: {
          elid: election.elid,
        },
      });
      return 0;
    } else {
      return 1;
    }
  }
  return 2;
};

/**
 * Insert results into the tally info table
 * @function
 * @async
 * @name insertResults
 * @param {*} name
 * @param {*} position
 * @param {*} noOfVotes
 * @returns {Number}
 */
module.exports.insertResults = async function (
  name,
  email,
  position,
  noOfVotes
) {
  if (name) {
    if (position) {
      if (noOfVotes) {
        await tallyinfo.create({
          name: name,
          email: email,
          position: position,
          noOfVotes: noOfVotes,
        });
        return 0;
      }
      return 1;
    }
    return 1;
  }
  return 1;
};

/**
 * @function
 * @name updatePostResults
 * @param {*} elid
 * @param {*} resultsStat
 * @returns {Integer}
 */
module.exports.updatePostResults = async function (elid = 1, resultsStat) {
  if (elid) {
    const election = await electiondata.findOne({
      where: {
        elid: elid,
      },
    });

    await electiondata.upsert({
      elid: election.elid,
      postResults: resultsStat,
    });

    return 0;
  }
  return 1;
};

/**
 * @function
 * @name getElectionResults
 * @returns {Array<tallyinfo>}
 */
module.exports.selectElectionResults = async function () {
  const results = await tallyinfo.findAll({
    attributes: ["name", "position", "noOfVotes"],
  });

  if (results.length > 0) {
    return results;
  } else {
    return 1;
  }
};

/**
 * @function
 * @name selectPostedStatus
 * @returns {Boolean}
 */
module.exports.selectPostedStatus = async function () {
  const stat = await electiondata.findOne({
    attributes: ["postResults"],
  });

  return stat;
};
