"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRoutes = void 0;

var _express = require("express");

var _CreateUserController = require("@modules/accounts/useCases/createUser/CreateUserController");

var _ListUserController = require("@modules/accounts/useCases/listUser/ListUserController");

var _verifyAuthentication = require("../middlewares/verifyAuthentication");

const usersRoutes = (0, _express.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new _CreateUserController.CreateUserController();
const listUserController = new _ListUserController.ListUserController();
usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/me', _verifyAuthentication.verifyAuthentication, listUserController.handle);