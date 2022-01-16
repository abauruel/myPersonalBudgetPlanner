import { User } from "@modules/accounts/infra/typeorm/entities/User"
import { GroupsRepositoryInMemory } from "@modules/accounts/repositories/in-Memory/GroupsRepositoryInMemory"
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-Memory/UsersRepositoryInMemory"
import { CreateGroupUseCase } from "../group/CreateGroupUseCase"
import { CreateUserUseCase } from "./CreateUserUseCase"

describe("User", () => {
  it("should be to create a new user", async () => {
    const groupsRepository = new GroupsRepositoryInMemory()
    const createGroupUseCase = new CreateGroupUseCase(groupsRepository)
    const usersRepository = new UsersRepositoryInMemory()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const group = 'grupoTeste'
    await createGroupUseCase.execute(group)
    const user = {
      name: 'teste1',
      email: 'teste1@teste.com',
      password: '123',
      idgroup: (await groupsRepository.findByName(group)).id
    }
    const newUser = new User()
    Object.assign(newUser, user)
    await createUserUseCase.execute(newUser)
    const userCreated = await usersRepository.findByEmail(user.email)
    expect(userCreated.email).toBe(user.email)
  })
})