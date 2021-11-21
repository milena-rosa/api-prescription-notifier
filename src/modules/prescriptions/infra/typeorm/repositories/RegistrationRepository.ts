import { getRepository, Repository } from 'typeorm'

import { Registration } from '../entities/Registration'
import { IRegistrationRepository } from '@modules/prescriptions/repositories/IRegistrationRepository'
import { IRegistrationDTO } from '@modules/prescriptions/dtos/IRegistrationDTO'

class RegistrationRepository implements IRegistrationRepository {
  private repository: Repository<Registration>

  constructor() {
    this.repository = getRepository(Registration)
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
  }: IRegistrationDTO): Promise<Registration> {
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
    })

    await this.repository.save(registration)

    return registration
  }

  async list(): Promise<Registration[]> {
    return await this.repository.find({
      relations: ['prescription_types', 'council_type', 'business_address', 'home_address']
    })
  }
}

export { RegistrationRepository }
