import { ICreateCouncilTypesDTO } from '../dtos/ICreateCouncilTypesDTO'
import { CouncilType } from '../infra/typeorm/entities/CouncilType'

interface ICouncilTypesRepository {
  create({ name, acronym }: ICreateCouncilTypesDTO): Promise<void>
  list(): Promise<CouncilType[]>
  findByAcronym(acronym: string): Promise<CouncilType>
}

export { ICouncilTypesRepository }
