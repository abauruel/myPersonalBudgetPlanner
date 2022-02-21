import 'reflect-metadata'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import 'express-async-errors'

import { routes } from '@shared/infra/http/routes'

import '@shared/infra/typeorm'
import '@shared/container'
import { AppError } from '@shared/errors/AppError'

dotenv.config()

const app = express()

app.use(express.json())
app.use(routes)

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `internal server error - ${error.message}`
  })

})


export { app }