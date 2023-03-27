import {
  Schema,
  model,
  Document,
  InferSchemaType,
  SchemaTimestampsConfig
} from 'mongoose'
import { HouseType } from '../types'

interface IHouse extends HouseType, Document, SchemaTimestampsConfig {}

const houseSchema = new Schema<IHouse>(
  {
    type: {
      type: String
    },
    title: {
      type: String
    },
    price: {
      type: Number
    },
    size: {
      type: Number
    },
    rooms: {
      type: Number
    },
    sale: {
      type: Boolean
    },
    hasParking: {
      type: Boolean
    },
    hasElevator: {
      type: Boolean
    },
    hasAir: {
      type: Boolean
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const HouseModel = model<IHouse>('House', houseSchema)

export type House = InferSchemaType<typeof houseSchema>

export default HouseModel
