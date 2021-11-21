import { IRegistrationDTO } from '../dtos/IRegistrationDTO'
import { Registration } from '../infra/typeorm/entities/Registration'

interface IRegistrationRepository {
  create(data: IRegistrationDTO): Promise<Registration>
  list(): Promise<Registration[]>
}

export { IRegistrationRepository }
