import { Router } from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, hideProduct, updateAvailability, updateProduct } from '../controllers/product'
import { createProductValidation, getProductByIdValidation, updateAvailabilityValidation, updateHiddenValidation, updateProductValidation } from '../middleware'

const productRouter = Router()

productRouter.get('/', getProducts)

productRouter.get('/:id', getProductByIdValidation, getProductById)

productRouter.put('/:id', getProductByIdValidation, updateProductValidation, updateProduct)

productRouter.patch('/:id', getProductByIdValidation, updateAvailabilityValidation, updateAvailability)

productRouter.patch('/:id/hide', getProductByIdValidation, updateHiddenValidation, hideProduct)

productRouter.post('/', createProductValidation, createProduct)

productRouter.delete('/:id', getProductByIdValidation, deleteProduct)

export { productRouter }

