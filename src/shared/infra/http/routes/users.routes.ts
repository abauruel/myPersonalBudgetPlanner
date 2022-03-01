import { CreateUserController } from '@modules/accounts/useCases/user/CreateUserController'
import { UpdateUserAvatarController } from '@modules/accounts/useCases/user/UpdateUserAvatarController'
import { Router } from 'express'
import multer from 'multer'
import { multerConfig } from '../../config/multerConfig'

const userRoutes = Router()
const upload = multer(multerConfig())
const updateUserAvatarController = new UpdateUserAvatarController()
const createUserController = new CreateUserController()


userRoutes.post("/", createUserController.handle)
userRoutes.patch("/", upload.single('file'), updateUserAvatarController.handle)


export { userRoutes }