import { inject, injectable } from 'tsyringe'

import { IRegistrationRepository } from '@modules/prescriptions/repositories/IRegistrationRepository'
import { ICreateRegistrationDTO } from '@modules/prescriptions/dtos/ICreateRegistrationDTO'
import { IAddressesRepository } from '@modules/prescriptions/repositories/IAddressesRepository'
import { ICouncilTypesRepository } from '@modules/prescriptions/repositories/ICouncilTypesRepository'
import { AppError } from '@shared/errors/AppError'
import { IPrescriptionTypesRepository } from '@modules/prescriptions/repositories/IPrescriptionTypesRepository'

@injectable()
class CreateRegistrationUseCase {
  constructor(
    @inject('RegistrationRepository')
    private registrationRepository: IRegistrationRepository,
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
    @inject('CouncilTypesRepository')
    private councilTypesRepository: ICouncilTypesRepository,
    @inject('PrescriptionTypesRepository')
    private prescriptionTypesRepository: IPrescriptionTypesRepository
  ) {}

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
  }: ICreateRegistrationDTO): Promise<void> {
    const { id: business_address_id } = await this.addressesRepository.create(business_address)
    const { id: home_address_id } = await this.addressesRepository.create(home_address)

    const { id: council_type_id } = await this.councilTypesRepository.findByAcronym(council_type)
    if (!council_type_id) {
      throw new AppError('Council not found.')
    }

    const prescriptionTypes = await this.prescriptionTypesRepository.findByNames(prescription_types)
    if (!prescriptionTypes) {
      throw new AppError('Prescription types not found.')
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
    })
  }
}

export { CreateRegistrationUseCase }
