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

module.exports.generalValidation = errorHandler(
  false,
  "General Validation Error",
  "A given field is not in required format",
  "wek-val"
);

module.exports.otpValidation = errorHandler(
  false,
  "Invalid OTP",
  "Entered OTP is not in required format",
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

module.exports.emptyBody = errorHandler(
  false,
  "Empty Body",
  "The body of the request has not been detected",
  "wek-se"
);

module.exports.missingField = errorHandler(
  false,
  "Empty Field",
  "A field is empty or not given",
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

module.exports.noVoter = errorHandler(
  false,
  "Not Found",
  "Cannot find voter associated with given email",
  "wek-nf"
);

module.exports.jwtError = errorHandler(
  false,
  "JWT Error",
  "Possible issue with JWT authentication",
  "wek-auth"
);

module.exports.jwtTokenExpired = errorHandler(
  false,
  "JWT Expired",
  "JWT Token has expired",
  "wek-auth"
);

module.exports.cannotAccess = errorHandler(
  false,
  "User Unauthorized",
  "Request cannopt be handled as user is unauthorized",
  "wek-val"
);

module.exports.incorrectOTP = errorHandler(
  false,
  "OTP Unmatched",
  "The given OTP does not match the OTP generated for the given email",
  "wek-nf"
);

module.exports.cannotAddCandidate = errorHandler(
  false,
  "Candidate Insert Aborted",
  "All candidates may have not been added due to empty fields or duplicate entry attempts",
  "wek-ci"
);

module.exports.isNotHallMember = errorHandler(
  false,
  "Not in Hall",
  "Current user is not a student in the given hall",
  "wek-ad"
);

module.exports.isNotFacultyMember = errorHandler(
  false,
  "Not in Faculty",
  "Current user is not a student in the given faculty",
  "wek-ad"
);

module.exports.isNotPostGraduate = errorHandler(
  false,
  "Not Post Graduate",
  "Current user is not a post graduate student",
  "wek-ad"
);

module.exports.ballotInvalid = errorHandler(
  false,
  "Ballot Invalid",
  "Ballot contains bad data",
  "wek-ve"
);

module.exports.electionAlreadyExists = errorHandler(
  false,
  "Single Election",
  "Currently,only a single election can be accomodated",
  "wek-ci"
);

module.exports.nothingToRemove = errorHandler(
  false,
  "Nothing to remove",
  "There is nothing to delete",
  "wek-nf"
);

module.exports.electionStarted = errorHandler(
  false,
  "Cannot complete action",
  "The election has started, this action cannot be completed",
  "wek-na"
);

module.exports.electionEnded = errorHandler(
  false,
  "Cannot complete action",
  "The election has ended, this action cannot be completed",
  "wek-na"
);

module.exports.electionNotStarted = errorHandler(
  false,
  "Cannot complete action",
  "The election has not started, this action cannot be completed",
  "wek-na"
);

module.exports.electionNotEnded = errorHandler(
  false,
  "Cannot complete action",
  "The election has not ended, this action cannot be completed",
  "wek-na"
);

module.exports.electionNotActive = errorHandler(
  false,
  "Cannot complete action",
  "No election has been established",
  "wek-na"
);

module.exports.userHasVoted = errorHandler(
  false,
  "Cannot complete action",
  "Vote already recorded for given email",
  "wek-na"
);

module.exports.cannotSubmitBallot = errorHandler(
  false,
  "Cannot submit ballot",
  "Ballot cannot be submitted due to validation errors",
  "wek-ve"
);

module.exports.noCandidates = errorHandler(
  false,
  "No candidates are present",
  "No candidate found",
  "wek-nf"
);

module.exports.resultsUnavailable = errorHandler(
  false,
  "Election Results Unavailable",
  "Election Results have not yet been posted",
  "wek-nf"
);

module.exports.noElectionResults = errorHandler(
  false,
  "No Election Results",
  "Election Results have not yet been generated",
  "wek-nf"
);