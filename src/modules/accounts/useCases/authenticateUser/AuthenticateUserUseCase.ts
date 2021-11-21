import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { AppError } from '@errors/AppError'

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository'

import auth from '@config/auth'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
  refreshToken: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const {
      secret_token,
      expires_in_token,
      secret_refresh_token,
      expires_in_refresh_token,
      expires_refresh_token_days
    } = auth

    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Email or password incorrect.')
    }

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect.')
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token
    })

    const refreshToken = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token
    })

    const refreshTokenExpirationDate = this.dateProvider.addDays(expires_refresh_token_days)

    await this.usersTokensRepository.create({
      user_id: user.id,
      expires_at: refreshTokenExpirationDate,
      refresh_token: refreshToken
    })

    return { user: { name: user.name, email }, token, refreshToken }
  }
}

export { AuthenticateUserUseCase }
