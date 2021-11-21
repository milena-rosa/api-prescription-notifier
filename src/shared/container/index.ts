import { container } from 'tsyringe'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { IAddressesRepository } from '@modules/prescriptions/repositories/IAddressesRepository'
import { AddressesRepository } from '@modules/prescriptions/infra/typeorm/repositories/AddressesRepository'
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository'
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository'
import { ICouncilTypesRepository } from '@modules/prescriptions/repositories/ICouncilTypesRepository'
import { CouncilTypesRepository } from '@modules/prescriptions/infra/typeorm/repositories/CouncilTypesRepository'
import { IPrescriptionTypesRepository } from '@modules/prescriptions/repositories/IPrescriptionTypesRepository'
import { PrescriptionTypesRepository } from '@modules/prescriptions/infra/typeorm/repositories/PrescriptionTypesRepository'
import { IRegistrationRepository } from '@modules/prescriptions/repositories/IRegistrationRepository'
import { RegistrationRepository } from '@modules/prescriptions/infra/typeorm/repositories/RegistrationRepository'

import './providers'

container.registerSingleton<IAddressesRepository>('AddressesRepository', AddressesRepository)

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository)

container.registerSingleton<ICouncilTypesRepository>('CouncilTypesRepository', CouncilTypesRepository)

container.registerSingleton<IPrescriptionTypesRepository>('PrescriptionTypesRepository', PrescriptionTypesRepository)

container.registerSingleton<IRegistrationRepository>('RegistrationRepository', RegistrationRepository)
