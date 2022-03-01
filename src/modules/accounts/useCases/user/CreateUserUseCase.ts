import { UserDto } from "@modules/accounts/infra/dtos/UserDto"
import { IGroupsRepositories } from "@modules/accounts/repositories/IGroupsRepositories"
import { IUsersRepositories } from "@modules/accounts/repositories/IUsersReposiotry"
import { AppError } from "@shared/errors/AppError"
import { inject, injectable } from "tsyringe"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepositories,
    @inject('GroupsRepository')
    private groupRepository: IGroupsRepositories
  ) { }

  async execute(user: UserDto): Promise<void> {
    if (!user.email.trim()) {
      throw new AppError(" email cannot be empty")
    }
    if (!user.idgroup) {
      const group = await this.groupRepository.create({ name: user.name })
      console.log(group)
      user.idgroup = group.id
      user.avatar = "12"
    }
    console.log(user)
    return await this.usersRepository.create(user)
  }

}

export { CreateUserUseCase }