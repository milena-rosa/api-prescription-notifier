"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressesRepository = void 0;

var _typeorm = require("typeorm");

var _Address = require("../entities/Address");

class AddressesRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Address.Address);
  }

  async create({
    street,
    number,
    complement,
    district,
    cep,
    city,
    uf
  }) {
    const address = this.repository.create({
      street,
      number,
      complement,
      district,
      cep,
      city,
      uf
    });
    await this.repository.save(address);
    return address;
  }

  async list() {
    return await this.repository.find();
  }

}

exports.AddressesRepository = AddressesRepository;