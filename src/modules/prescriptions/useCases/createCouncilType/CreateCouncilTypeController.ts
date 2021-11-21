import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { CreateCouncilTypeUseCase } from './CreateCouncilTypeUseCase'

class CreateCouncilTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, acronym } = request.body

    const createCouncilTypeUseCase = container.resolve(CreateCouncilTypeUseCase)
    await createCouncilTypeUseCase.execute({ name, acronym })

    return response.status(201).send()
  }
}

export { CreateCouncilTypeController }
