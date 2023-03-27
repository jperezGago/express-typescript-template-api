import { Request, Response, NextFunction as Next } from 'express'
import { houseService } from '../services'

export default {
  getOne: (req: Request, res: Response, next: Next) => {
    houseService
      .getHouse(req.params.id)
      .then(house => res.json(house))
      .catch(error => next(error))
  },
  get: (_: Request, res: Response, next: Next) => {
    houseService
      .getHouses()
      .then(houses => res.json(houses))
      .catch(error => next(error))
  },
  save: (req: Request, res: Response, next: Next) => {
    houseService
      .saveHouse(req.body)
      .then(house => res.json(house))
      .catch(error => next(error))
  },
  delete: (req: Request, res: Response, next: Next) => {
    houseService
      .deleteHouse(req.params.id)
      .then(house => res.json(house))
      .catch(error => next(error))
  }
}
