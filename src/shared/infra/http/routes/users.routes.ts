import { Router } from 'express'
import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController'
import { ListUserController } from '@modules/accounts/useCases/listUser/ListUserController'
import { verifyAuthentication } from '../middlewares/verifyAuthentication'

const usersRoutes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/me', verifyAuthentication, listUserController.handle)

export { usersRoutes }
