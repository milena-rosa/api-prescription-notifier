import { inject, injectable } from 'tsyringe'
import { ICouncilTypesRepository } from '@modules/prescriptions/repositories/ICouncilTypesRepository'
import { ICreateCouncilTypesDTO } from '@modules/prescriptions/dtos/ICreateCouncilTypesDTO'

@injectable()
class CreateCouncilTypeUseCase {
  constructor(
    @inject('CouncilTypesRepository')
    private councilTypesRepository: ICouncilTypesRepository
  ) {}

  async execute({ name, acronym }: ICreateCouncilTypesDTO): Promise<void> {
    await this.councilTypesRepository.create({ name, acronym })
  }
}

export { CreateCouncilTypeUseCase }
