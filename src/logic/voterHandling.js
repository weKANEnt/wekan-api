// const { users } = require("../db/models/users");
// const { vdata } = require("../db/models/vdata");
const { users, vdata } = require("../db/models");
// const config = require("../../../config/env");

/**
 * Checks if a user with given email exists in database
 * @async
 * @param {string} email 
 * @returns boolean
 */
module.exports.isRegistered = async function(email){
    if(email){
        const voter = await vdata.findOne({
            where: {
                email: email
            }
        });
        console.log(voter);
        if (voter){
            return true;
        }else{
            return false;
        };
    }else{
        return 0;
    }
};

/**
 * Updates the vote status of a given user with the given status
 * @async
 * @param {string} uid 
 * @param {boolean} vStat 
 * @returns -
 */
module.exports.updateVoteStatus = async function(uid, vStat){
    if (uid & vStat){
        await users.upsert({
            uid: uid,
            votestatus: vStat
        });
    }else{
        return 0;
    };
};

/**
 * Checks if given voter's vote status
 * @async
 * @param {*} email 
 * @returns object
 */
module.exports.hasVoted = async function(email){
    if(email){
        const voter = await vdata.findOne({
            where: {
                email: email
            }
        });

        const voterData = await users.findOne({
            where: {
                uid: voter.ccid
            }
        });

        return (voterData.votestatus);
    }else{
        return 0;
    }
}