"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUserController = void 0;

var _tsyringe = require("tsyringe");

var _ListUserUseCase = require("./ListUserUseCase");

class ListUserController {
  async handle(request, response) {
    const {
      id
    } = request.user;

    const createUserUseCase = _tsyringe.container.resolve(_ListUserUseCase.ListUserUseCase);

    const {
      name,
      email
    } = await createUserUseCase.execute(id);
    return response.status(200).send({
      id,
      name,
      email
    });
  }

}

exports.ListUserController = ListUserController;