const errorHandler = require("./create-error");

module.exports.emailUnregistered = errorHandler(
    false,
    "No Email Found",
    "Email not in registered voters list",
    "wek-nf"
);

module.exports.emailValidation = errorHandler(
    false,
    "Invalid Email",
    "Entered email is not in required format",
    "wek-val"
);

module.exports.serverError = errorHandler(
    false,
    "Sever Error",
    "Sepcific error unknown",
    "wek-se"
)