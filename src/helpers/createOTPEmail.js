/**
 * Module which returns a function to generate an email message configuration for OTP generated
 * @param {string} sender
 * @param {string} receiver
 * @return {Object}
 */
module.exports = function (sender, receiver, otp) {
  return {
    from: `UWIVotes ${sender}`,
    to: receiver,
    subject: "Welcome to UWIVotes",
    html:
      `<h2>Hello ${receiver}, Welcome to UWIVotes</h2>` +
      `<h4>Heres your OPT: ${otp}.</h4>` + 
      `<p>Enter it on the UWIVotes Website to get your ballot.</p>`,
  };
};
