const e = require("cors");
const { electiondata, tallyinfo } = require("../db/models");

/**
 * Adds election
 * @param {*} title
 * @param {*} sDate
 * @param {*} eDate
 * @param {*} csvLocation
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
          let newElection;
          newElection = await electiondata.create({
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
 * @param {*} elid
 * @returns
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
 * @param {*} elid
 * @returns
 */
module.exports.deleteElection = async function (elid = 1) {
  if (elid) {
    const election = await electiondata.findOne({
      where: {
        elid: elid,
      },
    });

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
