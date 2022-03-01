import { IGroupsRepositories } from "@modules/accounts/repositories/IGroupsRepositories";
import { getRepository, Repository } from "typeorm";
import { Group } from "../entities/Group";

class GroupsRepository implements IGroupsRepositories {
  private repository: Repository<Group>
  constructor() {
    this.repository = getRepository(Group)
  }
  async findByName(name: string): Promise<Group> {
    const group = await this.repository.findOne({
      where: {
        name
      }
    })

    return group
  }
  async findById(id: string): Promise<Group> {
    const group = await this.repository.findOne({
      where: {
        id
      }
    })

    return group
  }
  async create(Group: Group): Promise<Group> {
    const group = this.repository.create(Group)
    return this.repository.save(group)
  }
}

export { GroupsRepository }