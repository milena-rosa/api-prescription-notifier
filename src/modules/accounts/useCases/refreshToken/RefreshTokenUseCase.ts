import { sign, verify } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import auth from '@config/auth'
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository'
import { AppError } from '@shared/errors/AppError'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'

interface IPayload {
  sub: string
  email: string
}

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider
  ) {}

  async execute(token: string): Promise<string> {
    const { secret_refresh_token, expires_in_refresh_token, expires_refresh_token_days } = auth

    if (!token) {
      throw new AppError('Invalid token', 401, 'token.invalid')
    }
    const { email, sub: user_id } = verify(token, secret_refresh_token) as IPayload

    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id, token)
    if (!userToken) {
      throw new AppError('Refresh token does not exist.')
    }

    await this.usersTokensRepository.deleteById(userToken.id)

    const refreshToken = sign({ email }, secret_refresh_token, {
      subject: user_id,
      expiresIn: expires_in_refresh_token
    })

    const refreshTokenExpirationDate = this.dateProvider.addDays(expires_refresh_token_days)

    await this.usersTokensRepository.create({
      expires_at: refreshTokenExpirationDate,
      refresh_token: refreshToken,
      user_id
    })

    return refreshToken
  }
}

export { RefreshTokenUseCase }
