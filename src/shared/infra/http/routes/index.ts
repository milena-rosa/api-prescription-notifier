import { Router } from 'express'
import { addressesRoutes } from './addresses.routes'
import { authenticateRoutes } from './authenticate.routes'
import { councilTypesRoutes } from './councilTypes.routes'
import { prescriptionTypesRoutes } from './prescriptionTypes.routes'
import { usersRoutes } from './users.routes'
import { registrationRoutes } from '@shared/infra/http/routes/registration.routes'

const router = Router()

router.use('/addresses', addressesRoutes)
router.use('/users', usersRoutes)
router.use(authenticateRoutes)
router.use('/council-types', councilTypesRoutes)
router.use('/prescription-types', prescriptionTypesRoutes)
router.use('/registrations', registrationRoutes)

export { router }
