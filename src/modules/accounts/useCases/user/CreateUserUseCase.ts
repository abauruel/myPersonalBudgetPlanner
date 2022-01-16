import { UserDto } from "@modules/accounts/infra/dtos/UserDto"
import { IUsersRepositories } from "@modules/accounts/repositories/IUsersReposiotry"
import { AppError } from "@shared/errors/AppError"
import { inject, injectable } from "tsyringe"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepositories
  ) { }

  async execute(user: UserDto): Promise<void> {
    if (!user.email.trim()) {
      throw new AppError(" email cannot be empty")
    }
    if (!user.idgroup.trim()) {
      throw new AppError(" group cannot be empty")
    }

    await this.usersRepository.create(user)
  }

}

export { CreateUserUseCase }