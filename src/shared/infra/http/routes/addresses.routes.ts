import { Router } from 'express'
import { CreateAddressController } from '@modules/prescriptions/useCases/createAddress/CreateAddressController'
import { ListAddressesController } from '@modules/prescriptions/useCases/listAddresses/ListAddressesController'
import { verifyAuthentication } from '../middlewares/verifyAuthentication'

const addressesRoutes = Router()

const createAddressController = new CreateAddressController()
const listAddressesController = new ListAddressesController()

addressesRoutes.post('/', verifyAuthentication, createAddressController.handle)

addressesRoutes.get('/', verifyAuthentication, listAddressesController.handle)

export { addressesRoutes }
