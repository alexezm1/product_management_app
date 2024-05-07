import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getProductById, getProducts } from "../../services/productService";
import { Product } from "../../types";

export async function productLoader() {
    const products = await getProducts()
    return products
}

export async function editProductLoader({ params }: LoaderFunctionArgs) {
    if (params.id !== undefined) {
        const product = await getProductById(+params.id) as Product
        if (product.name === "AxiosError") {
            return redirect('/')
        }
        return product
    }
}