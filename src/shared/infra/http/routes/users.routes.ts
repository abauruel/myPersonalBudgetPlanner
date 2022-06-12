import { CreateGroupController } from '@modules/accounts/useCases/group/CreateGroupController'
import { CreateUserController } from '@modules/accounts/useCases/user/CreateUserController'
import { UpdateUserAvatarController } from '@modules/accounts/useCases/user/UpdateUserAvatarController'
import { Router } from 'express'
import multer from 'multer'
import { multerConfig } from '../../config/multerConfig'

const userRoutes = Router()
const upload = multer(multerConfig())
const updateUserAvatarController = new UpdateUserAvatarController()
const createUserController = new CreateUserController()

const createGroupController = new CreateGroupController()


userRoutes.post("/", createUserController.handle)
userRoutes.post("/group", createGroupController.handle)
userRoutes.patch("/", upload.single('file'), updateUserAvatarController.handle)


export { userRoutes }