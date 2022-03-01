import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'
class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, idgroup } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)
    await createUserUseCase.execute({ name, email, password, idgroup })
    return response.status(204).send()
  }
}

export { CreateUserController }