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
module.exports.getPresidentCandidates = async function(req, res) {
    if (req.headers === null || req.headers === ""){
        res.status(401).json(errorHandler.cannotAccess);
    } else {
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);

        if (payload && payload.id) {
            const voterr = await voter.isRegistered(payload.email);
            if(!voterr){
                    res.status(401).json(errorHandler.noVoter);
                } else if (voterr) {
                    const posNo = 1
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "President"));
                        }
                    }catch(err) {
                        res.status(500).json(errorHandler.queryError);
                    }
                } else{
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
module.exports.getVPSSPCandidates = async function(req, res) {
    if (req.headers === null || req.headers === ""){
        res.status(401).json(errorHandler.cannotAccess);
    } else {
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);

        if (payload && payload.id) {
            const voterr = await voter.isRegistered(payload.email);
            if(!voterr){
                    res.status(401).json(errorHandler.noVoter);
                } else if (voterr) {
                    const posNo = 2
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "VP SSP"));
                        }
                    }catch(err) {
                        res.status(500).json(errorHandler.queryError);
                    }
                } else{
                    res.status(500).json(errorHandler.serverError);
                }
        } else {
            res.status(500).json(errorHandler.jwtError);
        }
    }
};