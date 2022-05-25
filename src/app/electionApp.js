const admin = require("../logic/adminHandling");
const election = require("../logic/electionHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const getToken = require("../helpers/getToken");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");

/**
 * @function
 * @name createElection
 * @description  Create an election object in db using given details
 * @param {*} req 
 * @param {*} res 
 * @returns {Promise}
 * Need to add validation for cvs location
 */
module.exports.createElection = async function (req, res) {
    if (req.headers === null || req.headers === "") {
        res.status(401).json(errorHandler.cannotAccess);
        return;
    } else {
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);
        const { title, sDate, eDate, csvLocation } = req.body;

        if (payload && payload.id) {
            const adminn = await admin.findAdminById(payload.id);
            if (!adminn) {
                res.status(401).json(errorHandler.noAdmins);
                return;
            }  else if (adminn) {
                if ( !(title && sDate && eDate)){
                    res.status(400).json(errorHandler.emptyParam);
                    return;
                } else {
                    const vTitle = validate.valAlphanumeric(title);
                    const vSDate = validate.valDate(sDate);
                    const vEDate = validate.valDate(eDate);
                    const vSEDate = validate.val2Dates(sDate, eDate);
                    if (vTitle && vSDate && vEDate && vSEDate) {
                        try{
                            const addElection = await election.insertElection(title, sDate, eDate, csvLocation);
                            if (addElection === 0) {
                                res.status(200).json(successHandler(true, "Election created"));
                                return;
                            } else if (addElection === 1){
                                res.status(500).json(errorHandler.emptyParam);
                                return;
                            } else {
                                res.status(500).json(errorHandler.serverError);
                                return;
                            }
                        } catch(err){
                            res.status(500).json(errorHandler.queryError);
                            return;
                        }
                    } else if ( !vTitle || !vSDate || !vEDate || !vSEDate){
                        res.status(401).json(errorHandler.generalValidation);
                        return;
                    }
                }
            } else {
                res.status(500).json(errorHandler.serverError);
                return;
             }
        } else {
            res.status(500).json(errorHandler.jwtError);
            return;
        }
    }
};