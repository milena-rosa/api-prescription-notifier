"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrationRepository = void 0;

var _typeorm = require("typeorm");

var _Registration = require("../entities/Registration");

class RegistrationRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Registration.Registration);
  }

  async create({
    registration_number,
    registration_date,
    prescription_types,
    record_number_a,
    record_number_b,
    professional_or_institution_name,
    technical_or_clinical_director,
    professional_council_register,
    council_type_id,
    specialty,
    telephone_number,
    cellphone_number,
    email,
    business_address_id,
    home_address_id,
    comments
  }) {
    const registration = this.repository.create({
      registration_number,
      registration_date,
      prescription_types,
      record_number_a,
      record_number_b,
      professional_or_institution_name,
      technical_or_clinical_director,
      professional_council_register,
      council_type_id,
      specialty,
      telephone_number,
      cellphone_number,
      email,
      business_address_id,
      home_address_id,
      comments
    });
    await this.repository.save(registration);
    return registration;
  }

  async list() {
    return await this.repository.find({
      relations: ['prescription_types', 'council_type', 'business_address', 'home_address']
    });
  }

}

exports.RegistrationRepository = RegistrationRepository;