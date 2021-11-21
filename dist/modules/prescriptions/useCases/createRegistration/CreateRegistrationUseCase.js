"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRegistrationUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IRegistrationRepository = require("@modules/prescriptions/repositories/IRegistrationRepository");

var _IAddressesRepository = require("@modules/prescriptions/repositories/IAddressesRepository");

var _ICouncilTypesRepository = require("@modules/prescriptions/repositories/ICouncilTypesRepository");

var _AppError = require("@shared/errors/AppError");

var _IPrescriptionTypesRepository = require("@modules/prescriptions/repositories/IPrescriptionTypesRepository");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

let CreateRegistrationUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('RegistrationRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('AddressesRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('CouncilTypesRepository')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('PrescriptionTypesRepository')(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IRegistrationRepository.IRegistrationRepository === "undefined" ? Object : _IRegistrationRepository.IRegistrationRepository, typeof _IAddressesRepository.IAddressesRepository === "undefined" ? Object : _IAddressesRepository.IAddressesRepository, typeof _ICouncilTypesRepository.ICouncilTypesRepository === "undefined" ? Object : _ICouncilTypesRepository.ICouncilTypesRepository, typeof _IPrescriptionTypesRepository.IPrescriptionTypesRepository === "undefined" ? Object : _IPrescriptionTypesRepository.IPrescriptionTypesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class CreateRegistrationUseCase {
  constructor(registrationRepository, addressesRepository, councilTypesRepository, prescriptionTypesRepository) {
    this.registrationRepository = registrationRepository;
    this.addressesRepository = addressesRepository;
    this.councilTypesRepository = councilTypesRepository;
    this.prescriptionTypesRepository = prescriptionTypesRepository;
  }

  async execute({
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
  }) {
    const {
      id: business_address_id
    } = await this.addressesRepository.create(business_address);
    const {
      id: home_address_id
    } = await this.addressesRepository.create(home_address);
    const {
      id: council_type_id
    } = await this.councilTypesRepository.findByAcronym(council_type);

    if (!council_type_id) {
      throw new _AppError.AppError('Council not found.');
    }

    const prescriptionTypes = await this.prescriptionTypesRepository.findByNames(prescription_types);

    if (!prescriptionTypes) {
      throw new _AppError.AppError('Prescription types not found.');
    }

    await this.registrationRepository.create({
      registration_number,
      registration_date,
      prescription_types: prescriptionTypes,
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
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.CreateRegistrationUseCase = CreateRegistrationUseCase;