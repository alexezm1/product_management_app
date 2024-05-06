import { z } from "zod";
import { DraftProductSchema, ProductSchema } from "../schemas";

export type Product = z.infer<typeof ProductSchema>
export type DraftProduct = z.infer<typeof DraftProductSchema>