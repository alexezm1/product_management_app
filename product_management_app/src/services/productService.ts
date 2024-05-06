import axios from "axios"
import { DraftProductSchema } from "../schemas"

type ProductData = {
    [k: string]: FormDataEntryValue
}

export async function addProduct(data: ProductData) {
    const API_URL: string = import.meta.env.VITE_API_URL
    try {
        const result = DraftProductSchema.safeParse({
            name: data.name,
            price: +data.price
        })
        if (result.success) {
            const url = `${API_URL}/api/products`
            await axios.post(url, result.data)
        } else {
            throw new Error('Invalid Data')
        }
    } catch (error) {
        return error
    }
}