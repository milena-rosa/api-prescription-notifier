import { Router } from 'express'
import { CreateCouncilTypeController } from '@modules/prescriptions/useCases/createCouncilType/CreateCouncilTypeController'
import { ListCouncilTypesController } from '@modules/prescriptions/useCases/listCouncilTypes/ListCouncilTypesController'
import { verifyAuthentication } from '../middlewares/verifyAuthentication'

const councilTypesRoutes = Router()

const createCouncilTypeController = new CreateCouncilTypeController()
const listCouncilTypesController = new ListCouncilTypesController()

councilTypesRoutes.post('/', verifyAuthentication, createCouncilTypeController.handle)

councilTypesRoutes.get('/', verifyAuthentication, listCouncilTypesController.handle)

export { councilTypesRoutes }
