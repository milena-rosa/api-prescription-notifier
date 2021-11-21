import { inject, injectable } from 'tsyringe'
import { Address } from '@modules/prescriptions/infra/typeorm/entities/Address'
import { IAddressesRepository } from '@modules/prescriptions/repositories/IAddressesRepository'

@injectable()
class ListAddressesUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository
  ) {}

  async execute(): Promise<Address[]> {
    return await this.addressesRepository.list()
  }
}

export { ListAddressesUseCase }
