"use strict";

var _tsyringe = require("tsyringe");

var _UsersRepository = require("@modules/accounts/infra/typeorm/repositories/UsersRepository");

var _AddressesRepository = require("@modules/prescriptions/infra/typeorm/repositories/AddressesRepository");

var _UsersTokensRepository = require("@modules/accounts/infra/typeorm/repositories/UsersTokensRepository");

var _CouncilTypesRepository = require("@modules/prescriptions/infra/typeorm/repositories/CouncilTypesRepository");

var _PrescriptionTypesRepository = require("@modules/prescriptions/infra/typeorm/repositories/PrescriptionTypesRepository");

var _RegistrationRepository = require("@modules/prescriptions/infra/typeorm/repositories/RegistrationRepository");

require("./providers");

_tsyringe.container.registerSingleton('AddressesRepository', _AddressesRepository.AddressesRepository);

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton('UsersTokensRepository', _UsersTokensRepository.UsersTokensRepository);

_tsyringe.container.registerSingleton('CouncilTypesRepository', _CouncilTypesRepository.CouncilTypesRepository);

_tsyringe.container.registerSingleton('PrescriptionTypesRepository', _PrescriptionTypesRepository.PrescriptionTypesRepository);

_tsyringe.container.registerSingleton('RegistrationRepository', _RegistrationRepository.RegistrationRepository);