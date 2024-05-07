import { ActionFunctionArgs, redirect } from "react-router-dom";
import { addProduct, updateProduct } from "../../services/productService";

export async function newProductAction({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())

    let error = ''
    if (Object.values(data).includes('')) {
        error = "Missing Fields"
        return error
    }

    await addProduct(data)

    return redirect('/')
}

export async function editProductAction({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())

    let error = ''
    if (Object.values(data).includes('')) {
        error = "Missing Fields"
        return error
    }

    if (params.id !== undefined) {
        await updateProduct(data, +params.id)
        return redirect('/')
    }
}