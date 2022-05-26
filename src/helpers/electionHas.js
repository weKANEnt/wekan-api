/**
 * Dertermines whether or not the election has started
 * @function
 * @name haselectionStarted
 * @param {*} sDate 
 * @returns {Boolean}
 */
module.exports.haselectionStarted = function (sDate) {
    const today = new Date().toISOString().slice(0, 10);
    if (sDate === undefined || sDate === null || sDate === "") {
        return "Err with given date"
    } else {
        if (sDate <= today) {
            return true;
        } else {
            return false;
        }
    }
};

/**
 * Determines whether or not the election has ended
 * @function
 * @name hasElectionEnded
 * @param {*} eDate 
 * @returns {Boolean}
 */
module.exports.hasElectionEnded = function (eDate) {
    const today = new Date().toISOString().slice(0, 10);
    if (eDate === undefined || eDate === null || eDate === "") {
        return "Err with given date"
    } else {
        if (eDate < today) {
            return true;
        } else {
            return false;
        }
    }
};