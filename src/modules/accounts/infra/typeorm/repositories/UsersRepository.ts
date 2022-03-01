import { IUsersRepositories } from "@modules/accounts/repositories/IUsersReposiotry";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepositories {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)

  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email
      }
    })
    return user
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id
      }
    })
    return user
  }
  async create(User: User): Promise<void> {
    const user = this.repository.create(User)
    await this.repository.save(user)
  }

  async update(User: User): Promise<User> {
    const user = await this.repository.update(User.id, {
      avatar: User.avatar
    })
    return User
  }

}

export { UsersRepository }