import {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction as Next
} from 'express'
import { CustomError } from '../errors'

const errorHandler: ErrorRequestHandler = (
  error: CustomError,
  _: Request,
  res: Response,
  next: Next
) => {
  console.error(error)

  if (res.headersSent) {
    return next(error)
  }

  if (error.statusCode) {
    res.status(error.statusCode).json({ error: error.message })
  }

  res.status(500).send(error.message)
}

export default errorHandler
