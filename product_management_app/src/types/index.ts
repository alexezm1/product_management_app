import { z } from "zod";
import { DraftProductSchema, ProductSchema, ProductsSchema } from "../schemas";

export type Product = z.infer<typeof ProductSchema>
export type Products = z.infer<typeof ProductsSchema>
export type DraftProduct = z.infer<typeof DraftProductSchema>