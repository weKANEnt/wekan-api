const errorHandler = require("./create-error");

module.exports.emailUnregistered = errorHandler(
  false,
  "Not Found",
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
);

module.exports.emptyParam = errorHandler(
  false,
  "Empty Parameter",
  "A parameter is empty or not given",
  "wek-se"
);

module.exports.causingDuplicate = errorHandler(
  false,
  "Duplicate Entry Attemped",
  "A parameter will cause a duplicate if accepted",
  "wek-val"
);

module.exports.queryError = errorHandler(
  false,
  "Query Error",
  "Possible query error present",
  "wek-se"
);

module.exports.noAdmins = errorHandler(
  false,
  "Not Found",
  "Cannot find admin associated with given email",
  "wek-nf"
);

module.exports.jwtError = errorHandler(
  false,
  "JWT Error",
  "Possible issue with JWT authentication",
  "wek-val"
);

module.exports.cannotAccess = errorHandler(
  false,
  "User Unauthorized",
  "Request cannopt be handled as user is unauthorized",
  "wek-val"
);
