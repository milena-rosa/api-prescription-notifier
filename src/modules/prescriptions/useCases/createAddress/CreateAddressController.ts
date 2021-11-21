import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateAddressUseCase } from './CreateAddressUseCase'

class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { street, number, complement, district, cep, city, uf } = request.body

    const createAddressUseCase = container.resolve(CreateAddressUseCase)
    await createAddressUseCase.execute({ street, number, complement, district, cep, city, uf })

    return response.status(201).send()
  }
}

export { CreateAddressController }
