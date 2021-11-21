"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrescriptionTypesRepository = void 0;

var _typeorm = require("typeorm");

var _PrescriptionType = require("../entities/PrescriptionType");

class PrescriptionTypesRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_PrescriptionType.PrescriptionType);
  }

  async create({
    name
  }) {
    const registerType = this.repository.create({
      name
    });
    await this.repository.save(registerType);
  }

  async list() {
    return await this.repository.find();
  }

  async findByName(name) {
    return await this.repository.findOne({
      name
    });
  }

  async findByNames(names) {
    const prescriptionTypes = await this.repository.find({
      name: (0, _typeorm.Any)(names)
    });
    return prescriptionTypes;
  }

}

exports.PrescriptionTypesRepository = PrescriptionTypesRepository;