import z from 'zod'

export const ProductSchema = z.object({
    name: z.string(),
    price: z.number(),
    availability: z.boolean(),
    hidden: z.boolean()
})

export const DraftProductSchema = z.object({
    name: z.string(),
    price: z.number()
})