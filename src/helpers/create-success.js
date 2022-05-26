/**
 * Module which houses a function to generate a standard success
 * @param {*} success
 * @param {*} message
 * @returns {Object}
 */
module.exports = function (success, message) {
  return {
    success: success,
    message: message,
  };
};
