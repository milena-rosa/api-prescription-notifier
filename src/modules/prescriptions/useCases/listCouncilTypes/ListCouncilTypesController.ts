import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCouncilTypesUseCase } from './ListCouncilTypesUseCase'

class ListCouncilTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCouncilTypesUseCase = container.resolve(ListCouncilTypesUseCase)

    const allCouncilTypes = await listCouncilTypesUseCase.execute()
    return response.json(allCouncilTypes)
  }
}

export { ListCouncilTypesController }
