/**
 * Function that generates a OTP of length 6
 */
module.exports.generateOTP = function () {
    const alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const len = alphaNum.length;
    let OTP = '';

    for (let x=0; x < 6; x++) {
        OTP += alphaNum[Math.floor(Math.random() * len)];
    }

    return OTP;
}