import { Router } from 'express'

import { CreateRegistrationController } from '@modules/prescriptions/useCases/createRegistration/CreateRegistrationController'
import { ListRegistrationsController } from '@modules/prescriptions/useCases/listRegistrations/ListRegistrationsController'
import { verifyAuthentication } from '../middlewares/verifyAuthentication'

const registrationRoutes = Router()
const createRegistrationController = new CreateRegistrationController()
const listRegistrationsController = new ListRegistrationsController()

registrationRoutes.post('/', verifyAuthentication, createRegistrationController.handle)
registrationRoutes.get('/', verifyAuthentication, listRegistrationsController.handle)

export { registrationRoutes }
