import { inject, injectable } from 'tsyringe'

import { IRegistrationRepository } from '@modules/prescriptions/repositories/IRegistrationRepository'
import { Registration } from '@modules/prescriptions/infra/typeorm/entities/Registration'

@injectable()
class ListRegistrationsUseCase {
  constructor(
    @inject('RegistrationRepository')
    private registrationRepository: IRegistrationRepository
  ) {}

  async execute(): Promise<Registration[]> {
    return await this.registrationRepository.list()
  }
}

export { ListRegistrationsUseCase }
