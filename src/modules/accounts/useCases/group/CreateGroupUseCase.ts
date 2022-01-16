import { Group } from "@modules/accounts/infra/typeorm/entities/Group";
import { IGroupsRepositories } from "@modules/accounts/repositories/IGroupsRepositories";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateGroupUseCase {


  constructor(
    @inject('Group')
    private groupsRepository: IGroupsRepositories
  ) { }

  async execute(name: string) {
    if (!name.trim()) {
      throw new AppError("name cannot be empty")
    }

    const group = await this.groupsRepository.findByName(name)

    if (group) {
      throw new AppError("name already exist")
    }

    const newGroup = new Group()
    newGroup.name = name
    await this.groupsRepository.create(newGroup)

  }
}

export { CreateGroupUseCase }