import z from 'zod'

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    availability: z.boolean(),
    hidden: z.boolean()
})

export const ProductsSchema = z.array(ProductSchema)

export const DraftProductSchema = z.object({
    name: z.string(),
    price: z.number()
})