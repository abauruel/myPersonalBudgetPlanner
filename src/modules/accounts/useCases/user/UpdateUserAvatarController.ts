import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

type FileProps = Express.Multer.File & {
  location?: string
}

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { userId } = request.body
    const file: FileProps = request.file
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
    const avatar = file.filename ?? file.location
    const user = await updateUserAvatarUseCase.execute({ userId, avatar })
    return response.json(user)
  }
}

export { UpdateUserAvatarController }