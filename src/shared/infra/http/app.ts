import 'reflect-metadata'
import 'express-async-errors'
import dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express'

import { routes } from '@shared/infra/http/routes'

import '@shared/infra/typeorm'
import '@shared/container'
import { AppError } from '@shared/errors/AppError'

import morgan from 'morgan'
import path from 'path'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")))
app.use(routes)


app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `internal server error - ${error.message}`
  })
  next()

})


export { app }