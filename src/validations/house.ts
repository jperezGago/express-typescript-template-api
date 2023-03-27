import { z } from 'zod'
import {
  zNullableBoolean,
  zNullableNumber,
  zNullableString,
  zObjectId
} from './helpers'

const zHouse = z
  .object({
    type: zNullableString(),
    title: zNullableString(),
    price: zNullableNumber(),
    size: zNullableNumber(),
    rooms: zNullableNumber(),
    sale: zNullableBoolean(),
    hasParking: zNullableBoolean(),
    hasElevator: zNullableBoolean(),
    hasAir: zNullableBoolean()
  })
  .strict()

const zIdParam = () =>
  z.object({
    id: zObjectId()
  })

export default {
  get: z.object({
    params: zIdParam()
  }),
  save: z.object({
    body: zHouse
  }),
  delete: z.object({
    params: zIdParam()
  })
}

export type HouseType = z.infer<typeof zHouse>
