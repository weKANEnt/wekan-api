const ballot = require("../logic/ballotHandling");
const voter = require("../logic/voterHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const getToken = require("../helpers/getToken");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");

//small helper
function success(candidates, pos) {
  return {
    success: true,
    message: `Candidates for ${pos}`,
    candidates: [candidates],
  };
}

/**
 * Gets all candidates that are up for the Guild President position
 * @param {*} req
 * @param {*} res
 */
module.exports.getPresidentCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 1;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "President"));
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
  }
};

/**
 * Gets all candidates that are up for the VP SSP position
 * @param {*} req
 * @param {*} res
 */
module.exports.getVPSSPCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 2;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "VP SSP"));
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
  }
};

/**
 * Gets all candidates that are up for the VP SSP position
 * @param {*} req
 * @param {*} res
 */
module.exports.getVPPSICandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 3;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "VP PSI"));
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
  }
};

/**
 * Gets all candidates that are up for the Secretary position
 * @param {*} req
 * @param {*} res
 */
module.exports.getSecretaryCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 4;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "Secretary"));
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
  }
};

/**
 * Gets all candidates that are up for the Secretary position
 * @param {*} req
 * @param {*} res
 */
module.exports.getTreasurerCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 5;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "Treasuer"));
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
  }
};

/**
 * Gets all candidates that are up for the GCC position
 * @param {*} req
 * @param {*} res
 */
module.exports.getGCCCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 6;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "GCC"));
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
  }
};

/**
 * Gets all candidates that are up for the PRO position
 * @param {*} req
 * @param {*} res
 */
module.exports.getPROCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 7;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "PRO"));
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
  }
};

/**
 * Gets all candidates that are up for the CEAC position
 * @param {*} req
 * @param {*} res
 */
module.exports.getCEACCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 8;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "CEAC"));
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
  }
};

/**
 * Gets all candidates that are up for the EAC position
 * @param {*} req
 * @param {*} res
 */
module.exports.getEACCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (!voterr) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        const posNo = 9;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "EAC"));
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
  }
};

/**
 * Gets faculty rep candidates based on the faculty that the logged in voter is in
 * @param {*} req
 * @param {*} res
 */
module.exports.getFacultyCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);
    var posNo;
    var candidates;

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
        }

        try{
          candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "Faculty Rep."));
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
  }
};

/**
 * Gets all candiadtes up for hall chair based on the current logged in voter's hall
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getHallChairmanCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      var posNo;
      var candidates;

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr === false) {
          res.status(401).json(errorHandler.noVoter);
        } else if (voterr) {
          if (await ballot.isInHall(payload.id, 1)) {
            //AZ Preston
            posNo = 22;
          } else if (await ballot.isInHall(payload.id, 2)) {
            //Chancellor
            posNo = 24;
          } else if (await ballot.isInHall(payload.id, 3)) {
            //Irvine
            posNo = 28;
          } else if (await ballot.isInHall(payload.id, 4)) {
            //Mary Seacole
            posNo = 30;
          } else if (await ballot.isInHall(payload.id, 5)) {
            //Taylor
            posNo = 34;
          } else if (await ballot.isInHall(payload.id, 6)) {
            //Rex
            posNo = 32;
          } else if (await ballot.isInHall(payload.id, 7)) {
            //ABC
            posNo = 20;
          } else if (await ballot.isInHall(payload.id, 8)) {
            //ELR
            posNo = 26;
          } else if (await ballot.isInHall(payload.id, 9)) {
            //Marlene Hamilton
            posNo = 42;
          } else if (await ballot.isInHall(payload.id, 10)) {
            //Leslie Robinson
            posNo = 38;
          } else if (await ballot.isInHall(payload.id, 11)) {
            //George Alleyne
            posNo = 40;
          } else if (await ballot.isInHall(payload.id, 12)) {
            //WJC
            posNo = 36;
          } else {
            res.status(500).json(errorHandler.queryError)
          }
          try{
            candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
            } else if (candidates) {
              res.status(200).json(success(candidates, "Hall Rep."));
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
  }
};


/**
 * Gets all candiadtes up for deputy hall chair based on the current logged in voter's hall
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getDHallChairmanCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
      const token = getToken(req.headers);
      const payload = await jwt.verify(token, config.jwt_key);
      var posNo;
      var candidates;

      if (payload && payload.id) {
        const voterr = await voter.isRegistered(payload.email);
        if (voterr === false) {
          res.status(401).json(errorHandler.noVoter);
        } else if (voterr) {
          if (await ballot.isInHall(payload.id, 1)) {
            //AZ Preston
            posNo = 23;
          } else if (await ballot.isInHall(payload.id, 2)) {
            //Chancellor
            posNo = 25;
          } else if (await ballot.isInHall(payload.id, 3)) {
            //Irvine
            posNo = 29;
          } else if (await ballot.isInHall(payload.id, 4)) {
            //Mary Seacole
            posNo = 31;
          } else if (await ballot.isInHall(payload.id, 5)) {
            //Taylor
            posNo = 35;
          } else if (await ballot.isInHall(payload.id, 6)) {
            //Rex
            posNo = 33;
          } else if (await ballot.isInHall(payload.id, 7)) {
            //ABC
            posNo = 21;
          } else if (await ballot.isInHall(payload.id, 8)) {
            //ELR
            posNo = 27;
          } else if (await ballot.isInHall(payload.id, 9)) {
            //Marlene Hamilton
            posNo = 43;
          } else if (await ballot.isInHall(payload.id, 10)) {
            //Leslie Robinson
            posNo = 39;
          } else if (await ballot.isInHall(payload.id, 11)) {
            //George Alleyne
            posNo = 41;
          } else if (await ballot.isInHall(payload.id, 12)) {
            //WJC
            posNo = 37;
          } else {
            res.status(500).json(errorHandler.queryError)
          }
          try{
            candidates = await ballot.selectRequestedCandidates(posNo);
            if (candidates === 1) {
              res.status(500).json(errorHandler.emptyParam);
            } else if (candidates) {
              res.status(200).json(success(candidates, "Deputy Hall Rep."));
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
  }
};

/**
 * Gets all candidates that are up for the Commuting Rep. position
 * @param {*} req
 * @param {*} res
 */
module.exports.getCommutingCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
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
          } else if (candidates) {
            res.status(200).json(success(candidates, "Communting Rep."));
          }
        } catch (err) {
          res.status(500).json(errorHandler.queryError);
        }
      } else if (voterr.doesCommute === false) {
        res.status(401).json(errorHandler.isNotHallMember);
      } else {
        res.status(500).json(errorHandler.serverError);
      }
    } else {
      res.status(500).json(errorHandler.jwtError);
    }
  }
};

/**
 * Gets all candidates that are up for the Post Graduate Rep. position
 * @param {*} req
 * @param {*} res
 */
module.exports.getPostGradCandidates = async function (req, res) {
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (voterr == false) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr.isPostGrad === true) {
        const posNo = 16;
        try {
          const candidates = await ballot.selectRequestedCandidates(posNo);
          if (candidates === 1) {
            res.status(500).json(errorHandler.emptyParam);
          } else if (candidates) {
            res.status(200).json(success(candidates, "Post Grad Rep."));
          }
        } catch (err) {
          res.status(500).json(errorHandler.queryError);
        }
      } else if (voterr.doesCommute === false) {
        res.status(401).json(errorHandler.isNotPostGraduate);
      } else {
        res.status(500).json(errorHandler.serverError);
      }
    } else {
      res.status(500).json(errorHandler.jwtError);
    }
  }
};

/**
 * Allows a voter to submit a ballot after selecting candidates they would liek to vote for
 * @param {*} req 
 * @param {*} res 
 */
module.exports.submittBallot = async function (req, res) {
  console.log("yoooo")
  if (req.headers === null || req.headers === "") {
    res.status(401).json(errorHandler.cannotAccess);
  } else {
    const token = getToken(req.headers);
    const payload = await jwt.verify(token, config.jwt_key);
    const { cids } = req.body;
    var verdict = [];

    if (payload && payload.id) {
      const voterr = await voter.isRegistered(payload.email);
      if (voterr == false) {
        res.status(401).json(errorHandler.noVoter);
      } else if (voterr) {
        for (var c = 0; c < cids.length; c++) {
          verdict.push(Number.isInteger(cids[c]));
        }

        if (verdict.includes(false)) {
          res.status(400).json(errorHandler.ballotInvalid);
        } else if (!verdict.includes(false)) {
          try {
            console.log(cids)
            const result = await ballot.insertBallotInfo(cids);
            if (result === 0) {
              res
                .status(200)
                .json(successHandler(true, "Voter ballot submitted"));
            } else if (result === 1) {
              res.status(400).json(errorHandler.ballotInvalid);
            }
          } catch (err) {
            res.status(500).json(errorHandler.queryError);
          }
        }
      } else {
        res.status(500).json(errorHandler.serverError);
      }
    } else {
      res.status(500).json(errorHandler.jwtError);
    }
  }
};
