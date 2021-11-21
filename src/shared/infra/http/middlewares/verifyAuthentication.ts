import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { AppError } from '@errors/AppError'
import auth from '@config/auth'

interface IPayload {
  sub: string
}

export async function verifyAuthentication(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers
  if (!authorization) {
    throw new AppError('Token missing.', 401, 'token.invalid')
  }

  const [, token] = authorization.split(' ')
  if (!token) {
    throw new AppError('Token missing.', 401, 'token.invalid')
  }

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload

    request.user = {
      id: user_id
    }

    next()
  } catch (error) {
    throw new AppError('Invalid token.', 401, 'token.expired')
  }
}
