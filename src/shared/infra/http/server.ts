import 'reflect-metadata'

import express, { Request, Response } from 'express'
import 'express-async-errors'

import cors from 'cors'

import '@shared/infra/typeorm'
import '@shared/container'

import { router } from './routes'
import { AppError } from '@errors/AppError'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.use((error: Error, request: Request, response: Response): Response => {
  if (error instanceof AppError) {
    console.log('AppError', { error: error.code })
    return response.status(error.statusCode).json({
      error: true,
      message: error.message,
      code: error.code
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`
  })
})

app.listen(3333, () => console.log('server running on port 3333'))
