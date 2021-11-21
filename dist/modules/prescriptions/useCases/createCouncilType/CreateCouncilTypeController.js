"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCouncilTypeController = void 0;

var _tsyringe = require("tsyringe");

var _CreateCouncilTypeUseCase = require("./CreateCouncilTypeUseCase");

class CreateCouncilTypeController {
  async handle(request, response) {
    const {
      name,
      acronym
    } = request.body;

    const createCouncilTypeUseCase = _tsyringe.container.resolve(_CreateCouncilTypeUseCase.CreateCouncilTypeUseCase);

    await createCouncilTypeUseCase.execute({
      name,
      acronym
    });
    return response.status(201).send();
  }

}

exports.CreateCouncilTypeController = CreateCouncilTypeController;