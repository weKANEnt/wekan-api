const voter = require("../logic/voterHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");


/**
 * Checks if given email is registered to vote
 * @async
 * @param {*} req 
 * @param {*} res 
 * @returns res
 */
module.exports.isVoterRegistered = async function(req, res){
    const {email} = req.body;
    if (!email){
        res.status(503).json({message: 'Invalid email given'});
        return;
    }

    const vEmail = validate.valEmail(email);

    if(vEmail){
        try {
            const vote = await voter.isRegistered(email);
            if (vote === false){
                res.status(401).json(errorHandler.emailUnregistered);
            }else if (vote === true){
                res.status(200).json(successHandler
                    (true, 
                    "Email is registered to vote"
                    )
                );
            }else{
                res.status(500).json(errorHandler.serverError);
            }
        }catch(err){
            res.status(500).json(errorHandler.serverError);
        }
    } else if (vEmail!= true){
        res.status(401).json(errorHandler.emailValidation);
    }else{
        res.status(500).json(errorHandler.serverError);
    }
};