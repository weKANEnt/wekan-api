/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
const uname = /^[0-9a-zA-Z]+$/;
const title = /^(?!^\d*$)[a-zA-Z\d\s]*$/;
const gname = /^[A-Za-z.\s-]+$/;
const emailR = /.{1,}@mymona.uwi.edu$/;
const otpR = /^[A-Z0-9]{6}/;


// Helpers
/**
 * Function to determine is a date string follows the yyyy/mm/dd format
 * @author Goblinlord
 * @see https://stackoverflow.com/questions/18758772/how-do-i-validate-a-date-in-this-format-yyyy-mm-dd-using-jquery
 * @param {*} dateString
 * @returns {Boolean}
 */
function isValidDate(dateString) {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false; // Invalid format
  const d = new Date(dateString);
  const dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateString;
}

/**
 * Function to return todaay's date in the required format
 * @author Naomi Benjamin
 * @returns {DateString}
 */
function getToday() {
  console.log("yo")
  const today = new Date()
    .toLocaleDateString("zh-Hans-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    //.replaceAll("/", "-");
  console.log(today.replaceAll("/", "-"));
  return today;
}

/**
 *
 * @param {*} val
 * @returns {Booleam}
 */
function isBoolean(val) {
  return val === false || val === true;
}

/**
 * Username server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return {Boolean}
 */
module.exports.valAlphanumeric = function (username) {
  if (
    username === null ||
    username === "" ||
    username === undefined ||
    isBoolean(username) ||
    Number.isInteger(username) ||
    typeof username === "object"
  ) {
    return false;
  } else {
    if (!username.match(title)) {
      return false;
    } else {
      return true;
    }
  }
};

/**
 * Name server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return {Boolean}
 */
module.exports.valName = function (name) {
  if (
    name === null ||
    name === "" ||
    name === undefined ||
    isBoolean(name) ||
    Number.isInteger(name) ||
    typeof name === "object" || 
    name === "null"
  ) {
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
 * @return {Boolean}
 */
module.exports.valPassword = function (password) {
  if (
    password === null ||
    password === "" ||
    password === undefined ||
    isBoolean(password) ||
    typeof password === "object"
  ) {
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
 * @return {Boolean}
 */
module.exports.valEmail = function (email) {
  if (
    email === null ||
    email === "" ||
    email === undefined ||
    isBoolean(email) ||
    Number.isInteger(email) ||
    typeof email === "object"
  ) {
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
  if (
    otp === null ||
    otp === "" ||
    otp === undefined ||
    isBoolean(otp) ||
    typeof otp === "object"
  ) {
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
 * @returns {Boolean}
 */
module.exports.valDate = function (dateString) {
  if (
    dateString === undefined ||
    dateString === null ||
    dateString === "" ||
    isBoolean(dateString) ||
    Number.isInteger(dateString) ||
    typeof dateString === "object"
  ) {
    return false;
  } else {
    if (!isValidDate(dateString)) {
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
module.exports.val2Dates = function (sDate, eDate) {
  console.log("val2Dates");
  if (
    sDate === undefined ||
    sDate === null ||
    sDate === "" ||
    isBoolean(sDate) ||
    Number.isInteger(sDate) ||
    typeof sDate === "object"
  ) {
    console.log("validation err");
    return false;
  } else {
    if (
      eDate === undefined ||
      eDate === null ||
      eDate === "" ||
      isBoolean(eDate) ||
      Number.isInteger(eDate) ||
      typeof eDate === "object"
    ) {
      console.log("validation err 2");
      return false;
    } else {
      const vD1 = isValidDate(sDate);
      const vD2 = isValidDate(eDate);
      console.log(vD1, vD2);
      if (!(vD1 && vD2)) {
        return false;
      } else {
        if (sDate > eDate) {
          return false;
        } else if (sDate <= eDate) {
          console.log("kmt")
          const today = getToday();
          console.log(today);
          if (new Date(sDate).toISOString().slice(0, 10) >= today) {
            console.log("date?");
            if (new Date(eDate).toISOString().slice(0, 10) >= today) {
              console.log("date????");
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
