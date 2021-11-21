"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prescriptionTypesRoutes = void 0;

var _express = require("express");

var _CreatePrescriptionTypeController = require("@modules/prescriptions/useCases/createPrescriptionType/CreatePrescriptionTypeController");

var _ListPrescriptionTypesController = require("@modules/prescriptions/useCases/listPrescriptionTypes/ListPrescriptionTypesController");

var _verifyAuthentication = require("../middlewares/verifyAuthentication");

const prescriptionTypesRoutes = (0, _express.Router)();
exports.prescriptionTypesRoutes = prescriptionTypesRoutes;
const createPrescriptionTypeController = new _CreatePrescriptionTypeController.CreatePrescriptionTypeController();
const listPrescriptionTypesController = new _ListPrescriptionTypesController.ListPrescriptionTypesController();
prescriptionTypesRoutes.post('/', _verifyAuthentication.verifyAuthentication, createPrescriptionTypeController.handle);
prescriptionTypesRoutes.get('/', _verifyAuthentication.verifyAuthentication, listPrescriptionTypesController.handle);