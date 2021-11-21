import { getRepository, Repository } from 'typeorm'
import { ICreateAddressDTO } from '../../../dtos/ICreateAddressDTO'
import { IAddressesRepository } from '@modules/prescriptions/repositories/IAddressesRepository'
import { Address } from '../entities/Address'

class AddressesRepository implements IAddressesRepository {
  private repository: Repository<Address>

  constructor() {
    this.repository = getRepository(Address)
  }

  async create({ street, number, complement, district, cep, city, uf }: ICreateAddressDTO): Promise<Address> {
    const address = this.repository.create({
      street,
      number,
      complement,
      district,
      cep,
      city,
      uf
    })

    await this.repository.save(address)

    return address
  }

  async list(): Promise<Address[]> {
    return await this.repository.find()
  }
}

export { AddressesRepository }
