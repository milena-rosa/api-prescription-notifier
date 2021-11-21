import { ICreatePrescriptionTypeDTO } from '../dtos/ICreatePrescriptionTypeDTO'
import { PrescriptionType } from '../infra/typeorm/entities/PrescriptionType'

interface IPrescriptionTypesRepository {
  create({ name }: ICreatePrescriptionTypeDTO): Promise<void>
  list(): Promise<PrescriptionType[]>
  findByName(name: string): Promise<PrescriptionType>
  findByNames(names: string[]): Promise<PrescriptionType[]>
}

export { IPrescriptionTypesRepository }
