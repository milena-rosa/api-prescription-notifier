import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListPrescriptionTypesUseCase } from './ListPrescriptionTypesUseCase'

class ListPrescriptionTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPrescriptionTypesUseCase = container.resolve(ListPrescriptionTypesUseCase)

    const allPrescriptionTypes = await listPrescriptionTypesUseCase.execute()
    return response.json(allPrescriptionTypes)
  }
}

export { ListPrescriptionTypesController }
