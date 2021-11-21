import { IUserTokenDTO } from '@modules/accounts/dtos/IUserTokenDTO'
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository'
import { getRepository, Repository } from 'typeorm'
import { UserTokens } from '../entities/UserTokens'

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>

  constructor() {
    this.repository = getRepository(UserTokens)
  }

  async create({ user_id, expires_at, refresh_token }: IUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      refresh_token,
      expires_at
    })
    await this.repository.save(userToken)

    return userToken
  }

  async findByUserId(user_id: string): Promise<UserTokens[]> {
    const usersTokens = await this.repository.find({ user_id })
    return usersTokens
  }

  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
    return await this.repository.findOne({ user_id, refresh_token })
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}

export { UsersTokensRepository }
