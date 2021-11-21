"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAddressUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IAddressesRepository = require("@modules/prescriptions/repositories/IAddressesRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateAddressUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AddressesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAddressesRepository.IAddressesRepository === "undefined" ? Object : _IAddressesRepository.IAddressesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateAddressUseCase {
  constructor(addressesRepository) {
    this.addressesRepository = addressesRepository;
  }

  async execute({
    street,
    number,
    complement,
    district,
    cep,
    city,
    uf
  }) {
    return await this.addressesRepository.create({
      street,
      number,
      complement,
      district,
      cep,
      city,
      uf
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateAddressUseCase = CreateAddressUseCase;