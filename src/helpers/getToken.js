/**
 * Function that extracts a JWT Token from a given request header
 * @function
 * @param {*} header 
 * @returns {String}
 */
module.exports = function (header) {
  if (header && header.authorization) {
    const token = header.authorization.split(" ")[1];
    if (token) {
      return token;
    }
    return null;
  }
};
