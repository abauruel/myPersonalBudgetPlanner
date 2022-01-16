import { GroupsRepositoryInMemory } from "@modules/accounts/repositories/in-Memory/GroupsRepositoryInMemory"
import { CreateGroupUseCase } from "./CreateGroupUseCase"

describe('Group', () => {

  it('should be able to create a new group', async () => {
    const groupsRepository = new GroupsRepositoryInMemory()
    const createGroupUseCase = new CreateGroupUseCase(groupsRepository)
    const group = 'teste1'
    await createGroupUseCase.execute(group)
    const groupFound = await groupsRepository.findByName(group)
    expect(groupFound).toHaveProperty('name', 'teste1')
  })
})