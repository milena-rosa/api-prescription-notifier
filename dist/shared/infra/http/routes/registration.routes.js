"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationRoutes = void 0;

var _express = require("express");

var _CreateRegistrationController = require("@modules/prescriptions/useCases/createRegistration/CreateRegistrationController");

var _ListRegistrationsController = require("@modules/prescriptions/useCases/listRegistrations/ListRegistrationsController");

var _verifyAuthentication = require("../middlewares/verifyAuthentication");

const registrationRoutes = (0, _express.Router)();
exports.registrationRoutes = registrationRoutes;
const createRegistrationController = new _CreateRegistrationController.CreateRegistrationController();
const listRegistrationsController = new _ListRegistrationsController.ListRegistrationsController();
registrationRoutes.post('/', _verifyAuthentication.verifyAuthentication, createRegistrationController.handle);
registrationRoutes.get('/', _verifyAuthentication.verifyAuthentication, listRegistrationsController.handle);