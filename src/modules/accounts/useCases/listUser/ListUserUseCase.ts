import { inject, injectable } from 'tsyringe'

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { AppError } from '@errors/AppError'
import { User } from '@modules/accounts/infra/typeorm/entities/User'

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new AppError('User not found.')
    }

    return user
  }
}

export { ListUserUseCase }
