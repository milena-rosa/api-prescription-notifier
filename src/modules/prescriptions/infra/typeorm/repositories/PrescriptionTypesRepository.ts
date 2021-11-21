import { Any, getRepository, Repository } from 'typeorm'
import { PrescriptionType } from '../entities/PrescriptionType'
import { IPrescriptionTypesRepository } from '@modules/prescriptions/repositories/IPrescriptionTypesRepository'
import { ICreatePrescriptionTypeDTO } from '@modules/prescriptions/dtos/ICreatePrescriptionTypeDTO'

class PrescriptionTypesRepository implements IPrescriptionTypesRepository {
  private repository: Repository<PrescriptionType>

  constructor() {
    this.repository = getRepository(PrescriptionType)
  }

  async create({ name }: ICreatePrescriptionTypeDTO): Promise<void> {
    const registerType = this.repository.create({ name })

    await this.repository.save(registerType)
  }

  async list(): Promise<PrescriptionType[]> {
    return await this.repository.find()
  }

  async findByName(name: string): Promise<PrescriptionType> {
    return await this.repository.findOne({ name })
  }

  async findByNames(names: string[]): Promise<PrescriptionType[]> {
    const prescriptionTypes = await this.repository.find({
      name: Any(names)
    })
    return prescriptionTypes
  }
}

export { PrescriptionTypesRepository }
