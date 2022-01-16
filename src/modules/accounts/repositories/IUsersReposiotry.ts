import { UserDto } from "../infra/dtos/UserDto";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepositories {
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
  create(User: UserDto): Promise<void>
}

export { IUsersRepositories }