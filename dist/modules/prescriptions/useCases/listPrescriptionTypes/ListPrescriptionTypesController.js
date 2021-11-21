"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListPrescriptionTypesController = void 0;

var _tsyringe = require("tsyringe");

var _ListPrescriptionTypesUseCase = require("./ListPrescriptionTypesUseCase");

class ListPrescriptionTypesController {
  async handle(request, response) {
    const listPrescriptionTypesUseCase = _tsyringe.container.resolve(_ListPrescriptionTypesUseCase.ListPrescriptionTypesUseCase);

    const allPrescriptionTypes = await listPrescriptionTypesUseCase.execute();
    return response.json(allPrescriptionTypes);
  }

}

exports.ListPrescriptionTypesController = ListPrescriptionTypesController;