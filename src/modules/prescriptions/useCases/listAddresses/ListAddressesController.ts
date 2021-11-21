import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAddressesUseCase } from './ListAddressesUseCase'

class ListAddressesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAddressesUseCase = container.resolve(ListAddressesUseCase)

    const allAddresses = await listAddressesUseCase.execute()
    return response.json(allAddresses)
  }
}

export { ListAddressesController }
