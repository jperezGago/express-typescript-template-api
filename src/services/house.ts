import { HouseModel } from '../models'
import { CustomError } from '../errors'
import { House } from '../types'

export default {
  getHouse: async (id: string) => {
    const house = await HouseModel.findById(id)

    if (house === null) {
      throw new CustomError(404, 'Audience not found')
    }

    return house
  },
  getHouses: async () => {
    return HouseModel.find()
  },
  saveHouse: async (house: House) => {
    return HouseModel.create(house)
  },
  deleteHouse: async (id: string) => {
    const house = await HouseModel.findByIdAndRemove(id)

    if (house === null) {
      throw new CustomError(404, 'Audience not found')
    }

    return house
  }
}
