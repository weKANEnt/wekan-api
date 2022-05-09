const nodemailer = require("nodemailer");
const config = require("../../config/env");

/**
 * Module which returns a function to generate a transporter object
 *
 * @return {Mail}
 */
module.exports = function () {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.password,
    },
  });
};
