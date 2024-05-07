import axios from "axios"
import { DraftProductSchema, ProductSchema, ProductsSchema } from "../schemas"
import { Product } from "../types"

type ProductData = {
    [k: string]: FormDataEntryValue
}

const API_URL: string = import.meta.env.VITE_API_URL

export async function addProduct(data: ProductData) {

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

export async function getProducts() {
    try {
        const url = `${API_URL}/api/products`
        const response = await axios(url)
        const result = ProductsSchema.safeParse(response.data.data)
        if (result.success) {
            return result.data
        } else {
            throw new Error('Could not fetch data')
        }
    } catch (error) {
        return error
    }
}

export async function getProductById(id: Product['id']) {
    try {
        const url = `${API_URL}/api/products/${id}`
        const response = await axios(url)
        const result = ProductSchema.safeParse(response.data.data)
        if (result.success) {
            return result.data
        } else {
            throw new Error('Could not fetch data')
        }
    } catch (error) {
        return error
    }
}

export async function updateProduct(data: ProductData, id: Product['id']) {
    const updatedProduct = { id, ...data, price: +data.price }
    try {
        const url = `${API_URL}/api/products/${id}`
        const response = await axios.put(url, updatedProduct)
        const result = ProductSchema.safeParse(response.data.data)
        if (result.success) {
            return result.data
        } else {
            throw new Error('Could not update Product')
        }
    } catch (error) {
        return error
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `${API_URL}/api/products/${id}`
        await axios.delete(url)
    } catch (error) {
        return error
    }
}

export async function updateAvailability(id: Product['id']) {
    try {
        const url = `${API_URL}/api/products/${id}`
        await axios.patch(url)
    } catch (error) {
        return error
    }
}

export async function updateHidden(id: Product['id']) {
    try {
        const url = `${API_URL}/api/products/${id}`
        await axios.patch(`${url}/hide`)
    } catch (error) {
        return error
    }
}