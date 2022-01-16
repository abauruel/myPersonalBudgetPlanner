import { User } from "@modules/accounts/infra/typeorm/entities/User"
import { IUsersRepositories } from "../IUsersReposiotry"

class UsersRepositoryInMemory implements IUsersRepositories {

  private usersRepository: User[] = []
  async findByEmail(email: string): Promise<User> {
    const user = this.usersRepository.find(u => u.email == email)
    return user
  }
  async findById(id: string): Promise<User> {
    const user = this.usersRepository.find(u => u.id == id)
    return user
  }
  async create(User: User): Promise<void> {
    this.usersRepository.push(User)
  }
}

export { UsersRepositoryInMemory }