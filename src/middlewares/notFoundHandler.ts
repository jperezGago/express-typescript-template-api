import { Request, Response } from 'express'

export default function notFoundHandler(req: Request, res: Response) {
  res.status(404).send(`Route ${req.method}:${req.url} not found`)
}
