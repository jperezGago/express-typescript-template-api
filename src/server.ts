import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import { dbConnector, env } from './config'
import { errorHandler, notFoundHandler } from './middlewares'
import { router } from './routers'

dbConnector()

const app = express()
const { PORT } = env

app.use(bodyParser.json())
app.use(router)
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
