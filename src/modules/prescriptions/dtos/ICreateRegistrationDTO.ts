interface ICreateRegistrationDTO {
  registration_number: string
  registration_date: Date
  record_number_a: string
  record_number_b: string
  prescription_types: string[]
  professional_or_institution_name: string
  technical_or_clinical_director: string
  professional_council_register: string
  council_type: string
  specialty: string
  telephone_number: string
  cellphone_number: string
  email: string
  business_address: {
    street: string
    number: string
    complement?: string
    district: string
    cep: string
    city: string
    uf: string
  }
  home_address: {
    street: string
    number: string
    complement?: string
    district: string
    cep: string
    city: string
    uf: string
  }
  comments: string
}

export { ICreateRegistrationDTO }
