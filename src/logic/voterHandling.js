const { users } = require("../db/models/users");
const { vdata } = require("../db/models/vdata");
// const config = require("../../../config/env");

/**
 * Checks if a user with given email exists in database
 * @async
 * @param {string} email 
 * @returns boolean
 */
module.exports.checkUser = async function(email){
    if(email & email != null){
        const user = await vdata.findOne({
            where: {
                email: email
            }
        });
        if (user){
            return true;
        }else{
            return false;
        };
    };
};

/**
 * Gets information for user given an email
 * @async
 * @param {string} email 
 * @returns object
 */
module.exports.getUserInfoByEmail = async function(email){
    if (email & email != null){
        const user = await vdata.findOne({
            where: {
                email: email
            }
        });

        const fullUser = await users.findOne({
            where: {
                uid: user.emid
            }
        });
        return fullUser;
    }else{
        return "Error - email does not exist";
    };
};

/**
 * Updates the vote status of a given user with the given status
 * @async
 * @param {string} uid 
 * @param {boolean} vStat 
 * @returns 
 */
module.exports.updateVoteStatus = async function(uid, vStat){
    if (uid & uid != null & uid != NaN & vStat & typeof(vStat) == 'boolean'){
        await users.upsert({
            uid: uid,
            votestatus: vStat
        });
    }else{
        return "Error - issue with uid or vStat";
    };
};