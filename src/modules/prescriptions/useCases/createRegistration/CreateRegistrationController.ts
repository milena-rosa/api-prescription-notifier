import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateRegistrationUseCase } from './CreateRegistrationUseCase'

class CreateRegistrationController {
  async handle(request: Request, response: Response): Promise<Response> {
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
    } = request.body

    const createRegistrationUseCase = container.resolve(CreateRegistrationUseCase)
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
    })

    return response.status(201).send()
  }
}

export { CreateRegistrationController }
