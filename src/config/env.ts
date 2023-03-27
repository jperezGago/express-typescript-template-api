import { IEnv } from '../types'

const { PORT, MONGODB_URL } = process.env

const env: IEnv = {
  PORT: PORT ? Number(PORT) : 3000,
  MONGODB_URL
}

export default env
