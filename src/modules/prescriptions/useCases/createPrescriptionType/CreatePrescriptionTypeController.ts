import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { CreatePrescriptionTypeUseCase } from './CreatePrescriptionTypeUseCase'

class CreatePrescriptionTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createPrescriptionTypeUseCase = container.resolve(CreatePrescriptionTypeUseCase)
    await createPrescriptionTypeUseCase.execute({ name })

    return response.status(201).send()
  }
}

export { CreatePrescriptionTypeController }
