import * as dotenv from 'dotenv'
import express from 'express'
import { dbConnector } from './config'

dotenv.config()
dbConnector()
const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
