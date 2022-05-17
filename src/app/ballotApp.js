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

/**
 * Gets all candidates that are up for the VP SSP position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getVPPSICandidates = async function(req, res) {
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
                    const posNo = 3
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "VP PSI"));
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
 * Gets all candidates that are up for the Secretary position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getSecretaryCandidates = async function(req, res) {
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
                    const posNo = 4
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "Secretary"));
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
 * Gets all candidates that are up for the Secretary position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getTreasurerCandidates = async function(req, res) {
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
                    const posNo = 5
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "Treasuer"));
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
 * Gets all candidates that are up for the GCC position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getGCCCandidates = async function(req, res) {
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
                    const posNo = 6
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "GCC"));
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
 * Gets all candidates that are up for the PRO position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getPROCandidates = async function(req, res) {
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
                    const posNo = 7
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "PRO"));
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
 * Gets all candidates that are up for the CEAC position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getCEACCandidates = async function(req, res) {
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
                    const posNo = 8
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "CEAC"));
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
 * Gets all candidates that are up for the EAC position
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getEACCandidates = async function(req, res) {
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
                    const posNo = 9
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "EAC"));
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
 * Get all candidates for FST Representative
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getFSTCandidates = async function(req, res) {
    if (req.headers === null || req.headers === ""){
        res.status(401).json(errorHandler.cannotAccess);
    } else {
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);

        if (payload && payload.id) {
            const voterr = await voter.isRegistered(payload.email);
            const facultyValidation = await ballot.isInFaculty(payload.id, 2)
            if(voterr == false){
                    res.status(401).json(errorHandler.noVoter);
                } else if (facultyValidation === true) {
                    const posNo = 10
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "FST Rep."));
                        }
                    }catch(err) {
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (facultyValidation === false){
                    res.status(401).json(errorHandler.isNotFacultyMember);
                } else{
                    res.status(500).json(errorHandler.serverError);
                }
        } else {
            res.status(500).json(errorHandler.jwtError);
        }
    }
};

/**
 * This function is just horribly big lol
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getFacultyCandidates = async function(req, res) {
    if (req.headers === null || req.headers === ""){
        res.status(401).json(errorHandler.cannotAccess);
    } else {
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);
        var posNo;
        var candidates;

        if (payload && payload.id) {
            const voterr = await voter.isRegistered(payload.email);
            console.log(voterr);
            if(voterr === false){
                res.status(401).json(errorHandler.noVoter);
            } else if (voterr) {
                if (await ballot.isInFaculty(payload.id, 1)){
                    posNo = 19;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                } else if (await ballot.isInFaculty(payload.id, 2)){
                    posNo = 10;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (await ballot.isInFaculty(payload.id, 3)){
                    posNo = 11;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (await ballot.isInFaculty(payload.id, 4)){
                    posNo = 12;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (await ballot.isInFaculty(payload.id, 5)){
                    posNo = 13;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (await ballot.isInFaculty(payload.id, 6)){
                    posNo = 14;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (await ballot.isInFaculty(payload.id, 7)){
                    posNo = 15;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (await ballot.isInFaculty(payload.id, 8)){
                    posNo = 18;
                    try{
                        candidates = await ballot.selectRequestedCandidates(posNo);
                    }catch(err){
                        res.status(500).json(errorHandler.queryError);
                    }
                }else{
                    res.status(500).json(errorHandler.queryError);
                }
                
                if(candidates === 1){
                    res.status(500).json(errorHandler.emptyParam);
                } else if (candidates){
                    res.status(200).json(success(candidates, "Faculty Rep."));
                }
            }else{
                res.status(500).json(errorHandler.serverError)
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
module.exports.getCommutingCandidates = async function(req, res) {
    if (req.headers === null || req.headers === ""){
        res.status(401).json(errorHandler.cannotAccess);
    } else {
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);

        if (payload && payload.id) {
            const voterr = await voter.isRegistered(payload.email);
            if(voterr == false){
                    res.status(401).json(errorHandler.noVoter);
                } else if (voterr.doesCommute === true) {
                    const posNo = 17
                    try {
                        const candidates = await ballot.selectRequestedCandidates(posNo);
                        if(candidates === 1){
                            res.status(500).json(errorHandler.emptyParam);
                        } else if (candidates){
                            res.status(200).json(success(candidates, "Communting Rep."));
                        }
                    }catch(err) {
                        res.status(500).json(errorHandler.queryError);
                    }
                }else if (voterr.doesCommute === false){
                    res.status(401).json(errorHandler.isNotHallMember);
                } else{
                    res.status(500).json(errorHandler.serverError);
                }
        } else {
            res.status(500).json(errorHandler.jwtError);
        }
    }
};