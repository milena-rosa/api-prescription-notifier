"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.councilTypesRoutes = void 0;

var _express = require("express");

var _CreateCouncilTypeController = require("@modules/prescriptions/useCases/createCouncilType/CreateCouncilTypeController");

var _ListCouncilTypesController = require("@modules/prescriptions/useCases/listCouncilTypes/ListCouncilTypesController");

var _verifyAuthentication = require("../middlewares/verifyAuthentication");

const councilTypesRoutes = (0, _express.Router)();
exports.councilTypesRoutes = councilTypesRoutes;
const createCouncilTypeController = new _CreateCouncilTypeController.CreateCouncilTypeController();
const listCouncilTypesController = new _ListCouncilTypesController.ListCouncilTypesController();
councilTypesRoutes.post('/', _verifyAuthentication.verifyAuthentication, createCouncilTypeController.handle);
councilTypesRoutes.get('/', _verifyAuthentication.verifyAuthentication, listCouncilTypesController.handle);