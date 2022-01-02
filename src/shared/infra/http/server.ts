import express, { Request, Response } from 'express'
import { routes } from '@shared/infra/http/routes'
import { AppError } from '@shared/errors/AppError'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 3333
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

app.listen(port, () => console.info(`server running on ${port} port`))