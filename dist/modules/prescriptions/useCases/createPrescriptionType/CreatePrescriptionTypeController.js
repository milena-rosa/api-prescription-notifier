"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePrescriptionTypeController = void 0;

var _tsyringe = require("tsyringe");

var _CreatePrescriptionTypeUseCase = require("./CreatePrescriptionTypeUseCase");

class CreatePrescriptionTypeController {
  async handle(request, response) {
    const {
      name
    } = request.body;

    const createPrescriptionTypeUseCase = _tsyringe.container.resolve(_CreatePrescriptionTypeUseCase.CreatePrescriptionTypeUseCase);

    await createPrescriptionTypeUseCase.execute({
      name
    });
    return response.status(201).send();
  }

}

exports.CreatePrescriptionTypeController = CreatePrescriptionTypeController;