const admin = require("../logic/adminHandling");
const validate = require("../helpers/validate");
const errorHandler = require("../helpers/errors");
const successHandler = require("../helpers/create-success");
const getToken = require("../helpers/getToken");

const jwt = require("jsonwebtoken");
const config = require("../../config/env");
const bcrypt = require("bcrypt");

//Small helper
function success(token) {
  return {
    success: true,
    message: "Successful login.",
    token: `JWT ${token}`,
  };
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.loginAdmin = async function (req, res){
    const { email, password } = req.body;
    if (!(email && password)) {
        res.status(503).json(ifield);
        return;
    }
    const vEmail =  validate.valEmail(email);
    const vPassword =  validate.valPassword(password);

    if (vPassword && vEmail){
        try{
            const adminn = await admin.findAdmin(email);
            if(!adminn){
                res.status(401).json(errorHandler.noAdmins);
            }else if (adminn){
                console.log(vEmail);
                if(bcrypt.compareSync(password, adminn.password)){
                    const token = jwt.sign(
                        {
                            id: adminn.aid,
                            email: adminn.email,
                        },
                        config.jwt_key,
                        {
                            expiresIn: "1h",
                        }
                    );
                    res.status(200).json(success(token));
                }
            } else {
                res.status(500).json(errorHandler.serverError);
            }
        }catch(err){
            res.status(500).json(errorHandler.jwtError);
        }
    }else if (vEmail!== true || vPassword !== true){
        res.status(401).json(errorHandler.emailValidation);
    }else{
        res.status(500).json(errorHandler.serverError);
    }
};

/**
 * Function to register a voter given that the given email is not currently registered
 * Need to add that email should not be in admin table
 * @param {*} req 
 * @param {*} res 
 */
module.exports.registerVoter = async function(req, res){
    if (req.headers === null || req.headers === ""){
        res.status(401).json(errorHandler.cannotAccess);
    }else{
        const token = getToken(req.headers);
        const payload = await jwt.verify(token, config.jwt_key);
        const {email} = req.body;

        if(payload && payload.id){
            const adminn = await admin.findAdminById(payload.id);
            if(!adminn){
                res.status(401).json(errorHandler.noAdmins);
            }else if (adminn){
                if (!email){
                    res.status(503).json(errorHandler.emptyParam);
                }else{
                    const vEmail = validate.valEmail(email);

                    if (vEmail){
                        try{
                            const addVoter = await admin.addVoter(email);
                            console.log(addVoter);
                            if (addVoter === 1){
                                res.status(200).json(successHandler
                                    (true, "Voter email added successfully"));
                            }else if (addVoter === 0){
                                res.status(422).json(errorHandler.causingDuplicate);
                            } else if (addVoter === 2){
                                res.status(500).json(errorHandler.emptyParam);
                            } else{
                                res.status(500).json(errorHandler.serverError);
                            }
                        }catch(err){
                            res.status(500).json(errorHandler.queryError);
                        }
                    }else if (vEmail != true){
                        res.status(401).json(errorHandler.emailValidation);
                    }else{
                        res.status(500).json(errorHandler.serverError);
                    }
                }
            }else{
                res.status(500).json(errorHandler.serverError);
            }
        }else{
            res.status(500).json(errorHandler.jwtError);
        }
    }
};