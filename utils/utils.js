
const { validationResult } = require("express-validator");
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);
    req.errors = errors;
    const err = Error("Bad request.");
    err.status = 400;
    err.title = "Bad request.";
    err.errors = errors;
    return next(err);
  }
  next();
};

function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
} 

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

function convert(username){
  return intToRGB(hashCode(username))
}

const convertUserNameToHex = (req, res, next) =>{
  if(req.user){
    req.user.color = convert(req.user.username);
    req.user.capitalLetter = req.user.username[0].toUpperCase();
  }
  next();
  return
}

module.exports = {
  csrfProtection,
  asyncHandler,
  handleValidationErrors,
  convertUserNameToHex,
  convert
}