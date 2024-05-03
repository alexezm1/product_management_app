import { Router } from 'express'
import { createProduct, getProductById, getProducts } from '../controllers/product'
import { createProductValidation, getProductByIdValidation } from '../middleware'

const productRouter = Router()

productRouter.get('/', getProducts)

productRouter.get('/:id', getProductByIdValidation, getProductById)

productRouter.post('/', createProductValidation, createProduct)

export { productRouter }

