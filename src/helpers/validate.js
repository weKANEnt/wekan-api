const uname = /^[0-9a-zA-Z]+$/;
const gname = /^[A-Za-z.\s-]+$/;
const emailR = /.{1,}@mymona.uwi.edu$/;
const otpR = /^[A-Z0-9]{6}/;

/**
 * Username server side validation
 * @version 1.0
 * @author Spark-Inc
 * @return true if it passes the validation, false if it does not or false if the value passed is null or empty
 */
module.exports.valUsername = function (username) {
  if (username === null || username === "") {
    return false;
  } else {
    if (!username.match(uname)) {
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
  if (name === null || name === "") {
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
  if (password === null || password === "") {
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
  if (email === null || email === "") {
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
  if (otp === null || otp === "") {
    return false;
  } else {
    if (!otp.match(otpR)) {
      return false;
    } else {
      return true;
    }
  }
};
