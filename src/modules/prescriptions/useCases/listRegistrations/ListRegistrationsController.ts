import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListRegistrationsUseCase } from './ListRegistrationsUseCase'

class ListRegistrationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRegistrationsUseCase = container.resolve(ListRegistrationsUseCase)

    const allRegistrations = await listRegistrationsUseCase.execute()
    return response.json(allRegistrations)
  }
}

export { ListRegistrationsController }
