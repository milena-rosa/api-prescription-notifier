import { inject, injectable } from 'tsyringe'
import { IAddressesRepository } from '@modules/prescriptions/repositories/IAddressesRepository'
import { ICreateAddressDTO } from '@modules/prescriptions/dtos/ICreateAddressDTO'
import { Address } from '@modules/prescriptions/infra/typeorm/entities/Address'

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository
  ) {}

  async execute({ street, number, complement, district, cep, city, uf }: ICreateAddressDTO): Promise<Address> {
    return await this.addressesRepository.create({ street, number, complement, district, cep, city, uf })
  }
}

export { CreateAddressUseCase }
