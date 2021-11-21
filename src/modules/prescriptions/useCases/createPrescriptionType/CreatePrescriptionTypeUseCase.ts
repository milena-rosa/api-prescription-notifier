import { inject, injectable } from 'tsyringe'
import { IPrescriptionTypesRepository } from '@modules/prescriptions/repositories/IPrescriptionTypesRepository'
import { ICreatePrescriptionTypeDTO } from '@modules/prescriptions/dtos/ICreatePrescriptionTypeDTO'

@injectable()
class CreatePrescriptionTypeUseCase {
  constructor(
    @inject('PrescriptionTypesRepository')
    private prescriptionTypesRepository: IPrescriptionTypesRepository
  ) {}

  async execute({ name }: ICreatePrescriptionTypeDTO): Promise<void> {
    await this.prescriptionTypesRepository.create({ name })
  }
}

export { CreatePrescriptionTypeUseCase }
