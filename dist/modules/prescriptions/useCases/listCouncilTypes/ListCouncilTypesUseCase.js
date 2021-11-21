"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCouncilTypesUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ICouncilTypesRepository = require("@modules/prescriptions/repositories/ICouncilTypesRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListCouncilTypesUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CouncilTypesRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICouncilTypesRepository.ICouncilTypesRepository === "undefined" ? Object : _ICouncilTypesRepository.ICouncilTypesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListCouncilTypesUseCase {
  constructor(councilTypesRepository) {
    this.councilTypesRepository = councilTypesRepository;
  }

  async execute() {
    return await this.councilTypesRepository.list();
  }

}) || _class) || _class) || _class) || _class);
exports.ListCouncilTypesUseCase = ListCouncilTypesUseCase;