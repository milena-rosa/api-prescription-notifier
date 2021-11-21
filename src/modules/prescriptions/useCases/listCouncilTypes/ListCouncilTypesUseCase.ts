import { inject, injectable } from 'tsyringe'

import { CouncilType } from '@modules/prescriptions/infra/typeorm/entities/CouncilType'
import { ICouncilTypesRepository } from '@modules/prescriptions/repositories/ICouncilTypesRepository'

@injectable()
class ListCouncilTypesUseCase {
  constructor(
    @inject('CouncilTypesRepository')
    private councilTypesRepository: ICouncilTypesRepository
  ) {}

  async execute(): Promise<CouncilType[]> {
    return await this.councilTypesRepository.list()
  }
}

export { ListCouncilTypesUseCase }
