const e = require("cors");

const uname = /^[0-9a-zA-Z]+$/;      
const title = /^[\w\s]+$/;            
const gname = /^[A-Za-z.\s-]+$/;
const emailR = /.{1,}@mymona.uwi.edu$/;
const otpR = /^[A-Z0-9]{6}/;

//Helper
/**
 * Function to determine is a date string follows the yyyy/mm/dd format
 * @author Goblinlord
 * @see https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery
 * @param {*} dateString 
 * @returns 
 */
function isValidDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0,10) === dateString;
}

/**
 * Username server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return true if it passes the validation, false if it does not or false if the value passed is null or empty
 */
module.exports.valAlphanumeric = function (username) {
  if (username === null || username === "" || username === undefined) {
    return false;
  } else {
    if (!username.match(title)) {
      return false;
    } else {
      return true;
    }
  }
};
// just a test
/**
 * Name server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return true if it passes the validation, false if it does not or false if the value passed is null or empty
 */
module.exports.valName = function (name) {
  if (name === null || name === "" || name === undefined) {
    return false;
  } else {
    if (!name.match(gname)) {
      return false;
    } else {
      return true;
    }
  }
};

/**
 * Password server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return true if it passes the validation, false if it does not or false if the value passed is null or empty
 */
module.exports.valPassword = function (password) {
  if (password === null || password === "" || password === undefined) {
    return false;
  } else {
    if (!password.match(uname)) {
      return false;
    } else {
      return true;
    }
  }
};

/**
 * Email server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return true if it passes the validation, false if it does not or false if the value passed is null or empty
 */
module.exports.valEmail = function (email) {
  if (email === null || email === "" || email === undefined) {
    return false;
  } else {
    if (!email.match(emailR)) {
      return false;
    } else {
      return true;
    }
  }
};

/**
 * OTP Sever side validation
 * @author Naomi Benjamin
 * @param {*} otp
 * @returns
 */
module.exports.valOTP = function (otp) {
  if (otp === null || otp === "" || otp === undefined) {
    return false;
  } else {
    if (!otp.match(otpR)) {
      return false;
    } else {
      return true;
    }
  }
};

/**
 * @description Date erver side validation
 * @param {*} dateString 
 * @returns 
 */
module.exports.valDate = function (dateString) {
  if (dateString === undefined || dateString === null || dateString === "") {
    return false;
  } else {
    if (!isValidDate(dateString)){
      return false;
    } else {
      return true;
    }
  }
};

/**
 * @description Determine if the start and end dates are vaoid in relation to each other
 * @param {*} sDate 
 * @param {*} eDate 
 * @returns {Boolean}
 */
module.exports.val2Dates = function (sDate, eDate){
  if (sDate === undefined || sDate === null || sDate === ""){
    return false;
  } else {
    if (eDate === undefined || eDate === null || eDate === ""){
      return false;
    } else {
      const vD1 = isValidDate(sDate);
      const vD2 = isValidDate(eDate);
      if (!(vD1 && vD2)){
        return false;
      } else {
        if (sDate > eDate){
          return false;
        } else if (sDate <= eDate){
          const today = new Date().toISOString().slice(0,10);
          if (new Date(sDate).toISOString().slice(0,10) >= today) {
            if (new Date(eDate).toISOString().slice(0,10) >= today) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }
    }
  }
};
