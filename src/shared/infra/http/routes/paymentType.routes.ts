import { CreatePaymentTypeController } from '@modules/expenditure/useCases/PaymentTypes/CreatePaymentTypesController'
import { ListPaymentTypesController } from '@modules/expenditure/useCases/PaymentTypes/ListPaymentTypesController'
import { Router } from 'express'

const paymentTypeRoutes = Router()
const createPaymentTypeController = new CreatePaymentTypeController()
const listPaymentTypesController = new ListPaymentTypesController()

paymentTypeRoutes.get("/", listPaymentTypesController.handle)
paymentTypeRoutes.post("/", createPaymentTypeController.handle)

export { paymentTypeRoutes }