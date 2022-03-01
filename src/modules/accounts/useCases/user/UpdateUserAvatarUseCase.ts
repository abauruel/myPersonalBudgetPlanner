import { User } from "@modules/accounts/infra/typeorm/entities/User"
import { IUsersRepositories } from "@modules/accounts/repositories/IUsersReposiotry"
import { AppError } from "@shared/errors/AppError"
import { inject, injectable } from "tsyringe"

type UpdateUserAvatarInput = {
  userId: string
  avatar: string
}
@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepositories
  ) { }
  async execute({ userId, avatar }: UpdateUserAvatarInput): Promise<User> {
    const user = await this.userRepository.findById(userId)
    if (!user) {
      throw new Error("user not found")
    }

    user.avatar = avatar
    const userWithAvatar = await this.userRepository.update(user)
    return userWithAvatar

  }
}

export { UpdateUserAvatarUseCase }