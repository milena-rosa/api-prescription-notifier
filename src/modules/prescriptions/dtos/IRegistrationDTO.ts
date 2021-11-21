import { PrescriptionType } from '../infra/typeorm/entities/PrescriptionType'

interface IRegistrationDTO {
  registration_number: string
  registration_date: Date
  record_number_a: string
  record_number_b: string
  prescription_types: PrescriptionType[]
  professional_or_institution_name: string
  technical_or_clinical_director: string
  professional_council_register: string
  council_type_id: string
  specialty: string
  telephone_number: string
  cellphone_number: string
  email: string
  business_address_id: string
  home_address_id: string
  comments: string
}

export { IRegistrationDTO }
