"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRegistrationController = void 0;

var _tsyringe = require("tsyringe");

var _CreateRegistrationUseCase = require("./CreateRegistrationUseCase");

class CreateRegistrationController {
  async handle(request, response) {
    const {
      registration_number,
      registration_date,
      prescription_types,
      record_number_a,
      record_number_b,
      professional_or_institution_name,
      technical_or_clinical_director,
      professional_council_register,
      council_type,
      specialty,
      telephone_number,
      cellphone_number,
      email,
      business_address,
      home_address,
      comments
    } = request.body;

    const createRegistrationUseCase = _tsyringe.container.resolve(_CreateRegistrationUseCase.CreateRegistrationUseCase);

    await createRegistrationUseCase.execute({
      registration_number,
      registration_date,
      prescription_types,
      record_number_a,
      record_number_b,
      professional_or_institution_name,
      technical_or_clinical_director,
      professional_council_register,
      council_type,
      specialty,
      telephone_number,
      cellphone_number,
      email,
      business_address,
      home_address,
      comments
    });
    return response.status(201).send();
  }

}

exports.CreateRegistrationController = CreateRegistrationController;