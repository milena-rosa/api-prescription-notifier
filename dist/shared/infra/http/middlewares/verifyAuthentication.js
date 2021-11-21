"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyAuthentication = verifyAuthentication;

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = require("@errors/AppError");

var _auth = _interopRequireDefault(require("@config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function verifyAuthentication(request, response, next) {
  const {
    authorization
  } = request.headers;

  if (!authorization) {
    throw new _AppError.AppError('Token missing.', 401, 'token.invalid');
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    throw new _AppError.AppError('Token missing.', 401, 'token.invalid');
  }

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, _auth.default.secret_token);
    request.user = {
      id: user_id
    };
    next();
  } catch (error) {
    throw new _AppError.AppError('Invalid token.', 401, 'token.expired');
  }
}