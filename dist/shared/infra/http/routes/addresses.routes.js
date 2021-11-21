"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressesRoutes = void 0;

var _express = require("express");

var _CreateAddressController = require("@modules/prescriptions/useCases/createAddress/CreateAddressController");

var _ListAddressesController = require("@modules/prescriptions/useCases/listAddresses/ListAddressesController");

var _verifyAuthentication = require("../middlewares/verifyAuthentication");

const addressesRoutes = (0, _express.Router)();
exports.addressesRoutes = addressesRoutes;
const createAddressController = new _CreateAddressController.CreateAddressController();
const listAddressesController = new _ListAddressesController.ListAddressesController();
addressesRoutes.post('/', _verifyAuthentication.verifyAuthentication, createAddressController.handle);
addressesRoutes.get('/', _verifyAuthentication.verifyAuthentication, listAddressesController.handle);