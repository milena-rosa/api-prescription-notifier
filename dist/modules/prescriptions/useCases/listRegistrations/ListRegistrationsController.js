"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRegistrationsController = void 0;

var _tsyringe = require("tsyringe");

var _ListRegistrationsUseCase = require("./ListRegistrationsUseCase");

class ListRegistrationsController {
  async handle(request, response) {
    const listRegistrationsUseCase = _tsyringe.container.resolve(_ListRegistrationsUseCase.ListRegistrationsUseCase);

    const allRegistrations = await listRegistrationsUseCase.execute();
    return response.json(allRegistrations);
  }

}

exports.ListRegistrationsController = ListRegistrationsController;