import { getRepository, Repository } from 'typeorm'
import { ICreateCouncilTypesDTO } from '@modules/prescriptions/dtos/ICreateCouncilTypesDTO'
import { CouncilType } from '../entities/CouncilType'
import { ICouncilTypesRepository } from '@modules/prescriptions/repositories/ICouncilTypesRepository'

class CouncilTypesRepository implements ICouncilTypesRepository {
  private repository: Repository<CouncilType>

  constructor() {
    this.repository = getRepository(CouncilType)
  }

  async create({ name, acronym }: ICreateCouncilTypesDTO): Promise<void> {
    const councilType = this.repository.create({
      name,
      acronym
    })

    await this.repository.save(councilType)
  }

  async list(): Promise<CouncilType[]> {
    return await this.repository.find()
  }

  async findByAcronym(acronym: string): Promise<CouncilType> {
    return await this.repository.findOne({ acronym })
  }
}

export { CouncilTypesRepository }
