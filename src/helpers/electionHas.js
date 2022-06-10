/**
 * Function to return todaay's date in the required format
 * @author Naomi Benjamin
 * @returns {DateString}
 */
function getToday() {
  var temp = new Date().toLocaleDateString("zh-Hans-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const today = temp.split("/").join("-");
  return today;
}

/**
 * Dertermines whether or not the election has started
 * @function
 * @name haselectionStarted
 * @param {*} sDate
 * @returns {Boolean}
 */
module.exports.hasElectionStarted = function (sDate) {
  const today = getToday();
  sDate = new Date(sDate).toISOString().slice(0, 10);
  if (sDate === undefined || sDate === null || sDate === "") {
    return "Err with given date";
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
  const today = getToday();
  eDate = new Date(eDate).toISOString().slice(0, 10);
  if (eDate === undefined || eDate === null || eDate === "") {
    return "Err with given date";
  } else {
    if (eDate < today) {
      return true;
    } else {
      return false;
    }
  }
};
