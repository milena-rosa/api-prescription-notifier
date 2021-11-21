"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CouncilTypesRepository = void 0;

var _typeorm = require("typeorm");

var _CouncilType = require("../entities/CouncilType");

class CouncilTypesRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_CouncilType.CouncilType);
  }

  async create({
    name,
    acronym
  }) {
    const councilType = this.repository.create({
      name,
      acronym
    });
    await this.repository.save(councilType);
  }

  async list() {
    return await this.repository.find();
  }

  async findByAcronym(acronym) {
    return await this.repository.findOne({
      acronym
    });
  }

}

exports.CouncilTypesRepository = CouncilTypesRepository;