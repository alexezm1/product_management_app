import { Router } from 'express'
import { createProduct, getProductById, getProducts } from '../controllers/product'
import { productValidation } from '../middleware'

const productRouter = Router()

productRouter.get('/', getProducts)

productRouter.get('/:id', getProductById)

productRouter.post('/', productValidation, createProduct)

export { productRouter }

