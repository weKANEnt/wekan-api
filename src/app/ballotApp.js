const ballot = require("../logic/ballotHandling");
const voter = require("../logic/voterHandling");
const validate = require("../helpers/validate");
const dupes = require("../helpers/remove-dupes");
const election = require("../logic/electionHandling");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const getToken = require("../helpers/getToken");
const electionHandler = require("../helpers/electionHas");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");

// small helper
function success(candidates, pos) {
  return {
    success: true,
    message: `Candidates for ${pos}`,
    candidates: candidates,
  };
}

/**
 * Gets all candidates that are up for the Guild President position
 * @function
 * @async
 * @name getPresidentCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getPresidentCandidates = async function (req, res) {
  const posNo = 1;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "President"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the VP SSP position
 * @function
 * @async
 * @name getVPSSPCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getVPSSPCandidates = async function (req, res) {
  const posNo = 2;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "VP SSP"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the VP SSP position
 * @function
 * @async
 * @name getVPPSICandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getVPPSICandidates = async function (req, res) {
  const posNo = 3;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "VP PSI"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the Secretary position
 * @function
 * @async
 * @name getSecretaryCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getSecretaryCandidates = async function (req, res) {
  const posNo = 4;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "Secretary"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the Secretary position
 * @function
 * @async
 * @name getTreasurerCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getTreasurerCandidates = async function (req, res) {
  const posNo = 5;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "Treasurer"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the GCC position
 * @function
 * @async
 * @name getGCCCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getGCCCandidates = async function (req, res) {
  const posNo = 6;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "GCC"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the PRO position
 * @function
 * @async
 * @name getPROCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getPROCandidates = async function (req, res) {
  const posNo = 7;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "PRO"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the CEAC position
 * @function
 * @async
 * @name getCEACCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getCEACCandidates = async function (req, res) {
  const posNo = 8;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "CEAC"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets all candidates that are up for the EAC position
 * @function
 * @async
 * @name getEACCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getEACCandidates = async function (req, res) {
  const posNo = 9;
  try {
    const candidates = await ballot.selectRequestedCandidates(posNo);
    if (candidates == 1) {
      res.status(500).json(errorHandler.emptyParam);
      return;
    } else if (candidates) {
      res.status(200).json(success(candidates, "EAC"));
      return;
    }
  } catch (err) {
    res.status(500).json(errorHandler.queryError);
  }
};

/**
 * Gets faculty rep candidates based on the faculty that the logged in voter is in
 * This wouldbe during voting, currently no endpoint to just get the faculty candidates for viewing
 * @function
 * @async
 * @name getFacultyCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getFacultyCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      let posNo;
      let candidates;

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr === false) {
          res.status(401).json(errorHandler.noVoter);
        } else if (voterr) {
          if (await ballot.isInFaculty(payload.id, 1)) {
            posNo = 19;
          } else if (await ballot.isInFaculty(payload.id, 2)) {
            posNo = 10;
          } else if (await ballot.isInFaculty(payload.id, 3)) {
            posNo = 11;
          } else if (await ballot.isInFaculty(payload.id, 4)) {
            posNo = 12;
          } else if (await ballot.isInFaculty(payload.id, 5)) {
            posNo = 13;
          } else if (await ballot.isInFaculty(payload.id, 6)) {
            posNo = 14;
          } else if (await ballot.isInFaculty(payload.id, 7)) {
            posNo = 15;
          } else if (await ballot.isInFaculty(payload.id, 8)) {
            posNo = 18;
          } else {
            res.status(500).json(errorHandler.queryError);
            return;
          }

          try {
            candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
              return;
            } else if (candidates) {
              res.status(200).json(success(candidates, "Faculty Rep."));
              return;
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
          }
        } else {
          res.status(500).json(errorHandler.serverError);
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Gets all candiadtes up for hall chair based on the current logged in voter's hall
 * @function
 * @async
 * @name getHallChairmanCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getHallChairmanCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      let posNo;
      let candidates;

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr === false) {
          res.status(401).json(errorHandler.noVoter);
        } else if (voterr) {
          if (await ballot.isInHall(payload.id, 1)) {
            // AZ Preston
            posNo = 22;
          } else if (await ballot.isInHall(payload.id, 2)) {
            // Chancellor
            posNo = 24;
          } else if (await ballot.isInHall(payload.id, 3)) {
            // Irvine
            posNo = 28;
          } else if (await ballot.isInHall(payload.id, 4)) {
            // Mary Seacole
            posNo = 30;
          } else if (await ballot.isInHall(payload.id, 5)) {
            // Taylor
            posNo = 34;
          } else if (await ballot.isInHall(payload.id, 6)) {
            // Rex
            posNo = 32;
          } else if (await ballot.isInHall(payload.id, 7)) {
            // ABC
            posNo = 20;
          } else if (await ballot.isInHall(payload.id, 8)) {
            // ELR
            posNo = 26;
          } else if (await ballot.isInHall(payload.id, 9)) {
            // Marlene Hamilton
            posNo = 42;
          } else if (await ballot.isInHall(payload.id, 10)) {
            // Leslie Robinson
            posNo = 38;
          } else if (await ballot.isInHall(payload.id, 11)) {
            // George Alleyne
            posNo = 40;
          } else if (await ballot.isInHall(payload.id, 12)) {
            // WJC
            posNo = 36;
          } else {
            res.status(500).json(errorHandler.queryError);
            return;
          }
          try {
            candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
              return;
            } else if (candidates) {
              res.status(200).json(success(candidates, "Hall Rep."));
              return;
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
          }
        } else {
          res.status(500).json(errorHandler.serverError);
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Gets all candiadtes up for deputy hall chair based on the current logged in voter's hall
 * @function
 * @async
 * @name getDHallChairmanCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getDHallChairmanCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      let posNo;
      let candidates;

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr === false) {
          res.status(401).json(errorHandler.noVoter);
        } else if (voterr) {
          if (await ballot.isInHall(payload.id, 1)) {
            // AZ Preston
            posNo = 23;
          } else if (await ballot.isInHall(payload.id, 2)) {
            // Chancellor
            posNo = 25;
          } else if (await ballot.isInHall(payload.id, 3)) {
            // Irvine
            posNo = 29;
          } else if (await ballot.isInHall(payload.id, 4)) {
            // Mary Seacole
            posNo = 31;
          } else if (await ballot.isInHall(payload.id, 5)) {
            // Taylor
            posNo = 35;
          } else if (await ballot.isInHall(payload.id, 6)) {
            // Rex
            posNo = 33;
          } else if (await ballot.isInHall(payload.id, 7)) {
            // ABC
            posNo = 21;
          } else if (await ballot.isInHall(payload.id, 8)) {
            // ELR
            posNo = 27;
          } else if (await ballot.isInHall(payload.id, 9)) {
            // Marlene Hamilton
            posNo = 43;
          } else if (await ballot.isInHall(payload.id, 10)) {
            // Leslie Robinson
            posNo = 39;
          } else if (await ballot.isInHall(payload.id, 11)) {
            // George Alleyne
            posNo = 41;
          } else if (await ballot.isInHall(payload.id, 12)) {
            // WJC
            posNo = 37;
          } else {
            res.status(500).json(errorHandler.queryError);
            return;
          }
          try {
            candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
              return;
            } else if (candidates) {
              res.status(200).json(success(candidates, "Deputy Hall Rep."));
              return;
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
            return;
          }
        } else {
          res.status(500).json(errorHandler.serverError);
          return;
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Gets all candidates that are up for the Commuting Rep. position
 * @function
 * @async
 * @name getCommutingCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getCommutingCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr == false) {
          res.status(401).json(errorHandler.noVoter);
        } else if (voterr.doesCommute === true) {
          const posNo = 17;
          try {
            const candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
              return;
            } else if (candidates) {
              res.status(200).json(success(candidates, "Communting Rep."));
              return;
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
          }
        } else if (voterr.doesCommute === false) {
          res.status(401).json(errorHandler.isNotHallMember);
          return;
        } else {
          res.status(500).json(errorHandler.serverError);
          return;
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Gets all candidates that are up for the Post Graduate Rep. position
 * @function
 * @async
 * @name getPostGradCandidates
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.getPostGradCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr == false) {
          res.status(401).json(errorHandler.noVoter);
          return;
        } else if (voterr.isPostGrad === true) {
          const posNo = 16;
          try {
            const candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
              return;
            } else if (candidates) {
              res.status(200).json(success(candidates, "Post Grad Rep."));
              return;
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
          }
        } else if (voterr.isPostGrad === false) {
          res.status(401).json(errorHandler.isNotPostGraduate);
          return;
        } else {
          res.status(500).json(errorHandler.serverError);
          return;
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};

/**
 * Allows a voter to submit a ballot after selecting candidates they would liek to vote for
 * @function
 * @async
 * @name submitBallot
 * @param {*} req
 * @param {*} res
 * @return {Promise}
 */
module.exports.submitBallot = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
    return;
  } else {
    try {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      var { cids } = req.body;
      cids = dupes.removeDupes(cids);
      const verdict = [];

      if (payload && payload.id) {
        if (Array.isArray(cids) && cids.length > 0) {
          const electionDetails = await election.selectElection();
          if (electionDetails.length === 0) {
            res.status(500).json(errorHandler.serverError);
            return;
          } else if (electionDetails.length === 1) {
            const hasStarted = electionHandler.hasElectionStarted(
              electionDetails[0].startDate
            );
            const hasEnded = electionHandler.hasElectionEnded(
              electionDetails[0].endDate
            );
            const hasVoted = await voter.hasVoted(payload.email);
            if (
              hasStarted === true &&
              hasEnded === false &&
              hasVoted === false
            ) {
              const voterr = await voter.isRegistered(payload.email);
              if (voterr == false) {
                res.status(401).json(errorHandler.noVoter);
                return;
              } else if (voterr) {
                for (let c = 0; c < cids.length; c++) {
                  verdict.push(Number.isInteger(cids[c]));
                }

                if (verdict.includes(false)) {
                  res.status(400).json(errorHandler.ballotInvalid);
                  return;
                } else if (!verdict.includes(false)) {
                  try {
                    const result = await ballot.insertBallotInfo(cids);
                    if (result === 0) {
                      res
                        .status(200)
                        .json(successHandler(true, "Voter ballot submitted"));
                      const updated = await voter.updateVoteStatus(payload.id, true);
                      return updated;
                    } else if (result === 1) {
                      res.status(400).json(errorHandler.ballotInvalid);
                      return;
                    }
                  } catch (err) {
                    res.status(500).json(errorHandler.queryError);
                    return;
                  }
                }
              } else {
                res.status(500).json(errorHandler.serverError);
              }
            } else if (hasStarted === false) {
              res.status(400).json(errorHandler.electionNotStarted);
              return;
            } else if (hasEnded === true) {
              res.status(400).json(errorHandler.electionEnded);
              return;
            } else if (hasVoted === true) {
              res.status(401).json(errorHandler.userHasVoted);
              return;
            } else {
              res.status(400).json(errorHandler.generalValidation);
              return;
            }
          }
        } else {
          res.status(400).json(errorHandler.cannotSubmitBallot);
          return;
        }
      } else {
        res.status(500).json(errorHandler.jwtError);
        return;
      }
    } catch (err) {
      res.status(401).json(errorHandler.jwtTokenExpired);
      return;
    }
  }
};
