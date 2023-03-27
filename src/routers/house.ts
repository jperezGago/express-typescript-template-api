import express from 'express'
import { houseController } from '../controllers'
import { schemaValidator } from '../middlewares'
import { houseSchemas } from '../validations'

const router = express.Router()

router.get('/:id', schemaValidator(houseSchemas.get), houseController.getOne)
router.get('/', houseController.get)
router.post('/', schemaValidator(houseSchemas.save), houseController.save)
router.delete(
  '/:id',
  schemaValidator(houseSchemas.delete),
  houseController.delete
)

export default router
