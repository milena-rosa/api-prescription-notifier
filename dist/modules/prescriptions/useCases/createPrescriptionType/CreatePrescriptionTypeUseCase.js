"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePrescriptionTypeUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IPrescriptionTypesRepository = require("@modules/prescriptions/repositories/IPrescriptionTypesRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreatePrescriptionTypeUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('PrescriptionTypesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IPrescriptionTypesRepository.IPrescriptionTypesRepository === "undefined" ? Object : _IPrescriptionTypesRepository.IPrescriptionTypesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreatePrescriptionTypeUseCase {
  constructor(prescriptionTypesRepository) {
    this.prescriptionTypesRepository = prescriptionTypesRepository;
  }

  async execute({
    name
  }) {
    await this.prescriptionTypesRepository.create({
      name
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreatePrescriptionTypeUseCase = CreatePrescriptionTypeUseCase;