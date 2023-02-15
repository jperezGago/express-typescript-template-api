import { connect } from 'mongoose'
import env from './env'

export default function dbConnector(): void {
  const { MONGODB_URL } = env

  if (MONGODB_URL !== undefined) {
    connect(MONGODB_URL)
      .then(() => console.log('Mongodb connected'))
      .catch(error => console.log(error))
  }
}
