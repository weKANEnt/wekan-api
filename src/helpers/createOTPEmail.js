/**
 * Module which returns a function to generate an email message configuration for OTP generated
 * @param {string} sender
 * @param {string} receiver
 * @return {Object}
 */
module.exports = function (sender, receiver, otp) {
  return {
    from: sender,
    to: receiver,
    subject: "Welcome to UWIVotes",
    html: `<h3>Hello ${receiver}, Welcome to UWIVotes</h3>` 
            + `<p>Heres your OPT: ${otp}. Enter it on the UWIVotes Website to get your ballot.`,
  };
};
