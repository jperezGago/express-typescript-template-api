import express from 'express'
import houseRouter  from './house'

const router = express.Router()

router.use('/api/house', houseRouter)

export default router
