import { inject, injectable } from 'tsyringe'

import { PrescriptionType } from '@modules/prescriptions/infra/typeorm/entities/PrescriptionType'
import { IPrescriptionTypesRepository } from '@modules/prescriptions/repositories/IPrescriptionTypesRepository'

@injectable()
class ListPrescriptionTypesUseCase {
  constructor(
    @inject('PrescriptionTypesRepository')
    private prescriptionTypesRepository: IPrescriptionTypesRepository
  ) {}

  async execute(): Promise<PrescriptionType[]> {
    return await this.prescriptionTypesRepository.list()
  }
}

export { ListPrescriptionTypesUseCase }
