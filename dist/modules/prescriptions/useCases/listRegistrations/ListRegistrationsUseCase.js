"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRegistrationsUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IRegistrationRepository = require("@modules/prescriptions/repositories/IRegistrationRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListRegistrationsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('RegistrationRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IRegistrationRepository.IRegistrationRepository === "undefined" ? Object : _IRegistrationRepository.IRegistrationRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListRegistrationsUseCase {
  constructor(registrationRepository) {
    this.registrationRepository = registrationRepository;
  }

  async execute() {
    return await this.registrationRepository.list();
  }

}) || _class) || _class) || _class) || _class);
exports.ListRegistrationsUseCase = ListRegistrationsUseCase;