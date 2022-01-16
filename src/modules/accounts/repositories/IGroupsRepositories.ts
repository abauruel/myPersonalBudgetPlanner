import { Group } from "../infra/typeorm/entities/Group";

interface IGroupsRepositories {
  findById(id: string): Promise<Group>
  findByName(name: string): Promise<Group>
  create(Group: Group): Promise<void>
}

export { IGroupsRepositories }