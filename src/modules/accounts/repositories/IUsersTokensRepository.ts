import { IUserTokenDTO } from '../dtos/IUserTokenDTO'
import { UserTokens } from '../infra/typeorm/entities/UserTokens'

interface IUsersTokensRepository {
  create({ user_id, expires_at, refresh_token }: IUserTokenDTO): Promise<UserTokens>
  findByUserId(user_id: string): Promise<UserTokens[]>
  findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens>
  deleteById(id: string): Promise<void>
}

export { IUsersTokensRepository }
