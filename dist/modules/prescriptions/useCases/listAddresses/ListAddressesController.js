"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAddressesController = void 0;

var _tsyringe = require("tsyringe");

var _ListAddressesUseCase = require("./ListAddressesUseCase");

class ListAddressesController {
  async handle(request, response) {
    const listAddressesUseCase = _tsyringe.container.resolve(_ListAddressesUseCase.ListAddressesUseCase);

    const allAddresses = await listAddressesUseCase.execute();
    return response.json(allAddresses);
  }

}

exports.ListAddressesController = ListAddressesController;