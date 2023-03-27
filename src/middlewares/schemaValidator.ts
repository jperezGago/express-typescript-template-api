import { Request, Response, NextFunction as Next } from 'express'
import { AnyZodObject, ZodError } from 'zod'

export default function schemaValidator(schema: AnyZodObject) {
  return function validationMiddleware(
    req: Request,
    res: Response,
    next: Next
  ) {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query
      })

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.errors)
      }

      res.status(400).send('Internal server error')
    }
  }
}
