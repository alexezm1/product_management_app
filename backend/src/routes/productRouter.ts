import { Router } from 'express'
import { createProduct, getProductById, getProducts, updateAvailability, updateProduct } from '../controllers/product'
import { createProductValidation, getProductByIdValidation, updateAvailabilityValidation, updateProductValidation } from '../middleware'

const productRouter = Router()

productRouter.get('/', getProducts)

productRouter.get('/:id', getProductByIdValidation, getProductById)

productRouter.put('/:id', getProductByIdValidation, updateProductValidation, updateProduct)

productRouter.patch('/:id', getProductByIdValidation, updateAvailabilityValidation, updateAvailability)

productRouter.post('/', createProductValidation, createProduct)

export { productRouter }

