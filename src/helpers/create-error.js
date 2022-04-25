/**
 * Module which houses a function to generate a standard error
 * @param {Boolean} success
 * @param {string} name
 * @param {string} message
 * @return {Object}
 */
module.exports = function (success, name, message, code = 0) {
  return {
    success: success,
    name: name,
    message: message,
    code: code,
  };
};
