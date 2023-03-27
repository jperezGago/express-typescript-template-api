export interface IEnv {
  PORT: number
  MONGODB_URL?: string
}

export { HouseType } from './validations/house'

export { House } from './models/house'
