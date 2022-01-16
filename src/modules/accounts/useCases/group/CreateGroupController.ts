import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateGroupUseCase } from "./CreateGroupUseCase"
class CreateGroupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const createGroupUseCase = container.resolve(CreateGroupUseCase)
    await createGroupUseCase.execute(name)
    return response.status(204)
  }
}

export { CreateGroupController }