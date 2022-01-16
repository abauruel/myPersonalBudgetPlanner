import { Group } from "@modules/accounts/infra/typeorm/entities/Group";
import { IGroupsRepositories } from "../IGroupsRepositories";

class GroupsRepositoryInMemory implements IGroupsRepositories {
  private groupsRepository: Group[] = []

  async findById(id: string): Promise<Group> {
    const group = this.groupsRepository.find(g => g.id == id)
    return group
  }
  async findByName(name: string): Promise<Group> {
    const group = this.groupsRepository.find(g => g.name == name)
    return group
  }

  async create(Group: Group): Promise<void> {
    this.groupsRepository.push(Group)

  }

}

export { GroupsRepositoryInMemory }