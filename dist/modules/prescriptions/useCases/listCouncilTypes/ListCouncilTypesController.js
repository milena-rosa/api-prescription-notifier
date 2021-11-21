"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCouncilTypesController = void 0;

var _tsyringe = require("tsyringe");

var _ListCouncilTypesUseCase = require("./ListCouncilTypesUseCase");

class ListCouncilTypesController {
  async handle(request, response) {
    const listCouncilTypesUseCase = _tsyringe.container.resolve(_ListCouncilTypesUseCase.ListCouncilTypesUseCase);

    const allCouncilTypes = await listCouncilTypesUseCase.execute();
    return response.json(allCouncilTypes);
  }

}

exports.ListCouncilTypesController = ListCouncilTypesController;