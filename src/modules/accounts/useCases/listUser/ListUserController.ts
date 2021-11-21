import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUserUseCase } from './ListUserUseCase'

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const createUserUseCase = container.resolve(ListUserUseCase)
    const { name, email } = await createUserUseCase.execute(id)

    return response.status(200).send({
      id,
      name,
      email
    })
  }
}

export { ListUserController }
