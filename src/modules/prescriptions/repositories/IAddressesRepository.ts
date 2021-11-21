import { ICreateAddressDTO } from '../dtos/ICreateAddressDTO'
import { Address } from '../infra/typeorm/entities/Address'

interface IAddressesRepository {
  create({ street, number, complement, district, cep, city, uf }: ICreateAddressDTO): Promise<Address>
  list(): Promise<Address[]>
}

export { IAddressesRepository }
