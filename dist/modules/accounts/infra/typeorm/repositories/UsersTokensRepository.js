"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokensRepository = void 0;

var _typeorm = require("typeorm");

var _UserTokens = require("../entities/UserTokens");

class UsersTokensRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_UserTokens.UserTokens);
  }

  async create({
    user_id,
    expires_at,
    refresh_token
  }) {
    const userToken = this.repository.create({
      user_id,
      refresh_token,
      expires_at
    });
    await this.repository.save(userToken);
    return userToken;
  }

  async findByUserId(user_id) {
    const usersTokens = await this.repository.find({
      user_id
    });
    return usersTokens;
  }

  async findByUserIdAndRefreshToken(user_id, refresh_token) {
    return await this.repository.findOne({
      user_id,
      refresh_token
    });
  }

  async deleteById(id) {
    await this.repository.delete(id);
  }

}

exports.UsersTokensRepository = UsersTokensRepository;