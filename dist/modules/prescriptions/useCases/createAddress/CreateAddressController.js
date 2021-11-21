"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAddressController = void 0;

var _tsyringe = require("tsyringe");

var _CreateAddressUseCase = require("./CreateAddressUseCase");

class CreateAddressController {
  async handle(request, response) {
    const {
      street,
      number,
      complement,
      district,
      cep,
      city,
      uf
    } = request.body;

    const createAddressUseCase = _tsyringe.container.resolve(_CreateAddressUseCase.CreateAddressUseCase);

    await createAddressUseCase.execute({
      street,
      number,
      complement,
      district,
      cep,
      city,
      uf
    });
    return response.status(201).send();
  }

}

exports.CreateAddressController = CreateAddressController;