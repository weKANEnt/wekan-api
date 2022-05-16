const { users, vdata, candidates, positions } = require("../db/models");

module.exports.selectRequestedCandidates = async function (posNo){
    if (posNo){
        const position = await positions.findOne({ 
            where: { 
                pid: posNo
            },
        });

        const candidatess = await candidates.findAll({ 
            where: { 
                position: position.positionTitle
            },
        });

        return candidatess;
    };
    return 1;
};