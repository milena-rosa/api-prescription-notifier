import { Router } from 'express'
import { CreatePrescriptionTypeController } from '@modules/prescriptions/useCases/createPrescriptionType/CreatePrescriptionTypeController'
import { ListPrescriptionTypesController } from '@modules/prescriptions/useCases/listPrescriptionTypes/ListPrescriptionTypesController'
import { verifyAuthentication } from '../middlewares/verifyAuthentication'

const prescriptionTypesRoutes = Router()

const createPrescriptionTypeController = new CreatePrescriptionTypeController()
const listPrescriptionTypesController = new ListPrescriptionTypesController()

prescriptionTypesRoutes.post('/', verifyAuthentication, createPrescriptionTypeController.handle)

prescriptionTypesRoutes.get('/', verifyAuthentication, listPrescriptionTypesController.handle)

export { prescriptionTypesRoutes }
