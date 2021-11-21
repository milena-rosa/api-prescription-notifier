"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _cors = _interopRequireDefault(require("cors"));

require("@shared/infra/typeorm");

require("@shared/container");

var _routes = require("./routes");

var _AppError = require("@errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_routes.router);
app.use((error, request, response) => {
  if (error instanceof _AppError.AppError) {
    return response.status(error.statusCode).json({
      error: true,
      message: error.message,
      code: error.code
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`
  });
});
app.listen(3333, () => console.log('server running on port 3333'));