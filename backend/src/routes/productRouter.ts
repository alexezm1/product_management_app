import { Router } from 'express'
import { createProduct } from '../controllers/product'
import { productValidation } from '../middleware'

const productRouter = Router()

productRouter.get('/', (req, res) => {
    res.json('Hello World')
})

productRouter.post('/', productValidation, createProduct)

export { productRouter }

