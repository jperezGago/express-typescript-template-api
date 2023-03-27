import { z } from 'zod'

export const zObjectId = () => z.string().length(24)
export const zNullableString = () => z.string().nullable()
export const zNullableNumber = () => z.number().nullable()
export const zNullableBoolean = () => z.boolean().nullable()
