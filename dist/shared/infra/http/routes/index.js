"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _addresses = require("./addresses.routes");

var _authenticate = require("./authenticate.routes");

var _councilTypes = require("./councilTypes.routes");

var _prescriptionTypes = require("./prescriptionTypes.routes");

var _users = require("./users.routes");

var _registration = require("@shared/infra/http/routes/registration.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use('/addresses', _addresses.addressesRoutes);
router.use('/users', _users.usersRoutes);
router.use(_authenticate.authenticateRoutes);
router.use('/council-types', _councilTypes.councilTypesRoutes);
router.use('/prescription-types', _prescriptionTypes.prescriptionTypesRoutes);
router.use('/registrations', _registration.registrationRoutes);