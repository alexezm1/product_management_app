import { Router } from 'express'

const productRouter = Router()

productRouter.get('/', (req, res) => {
    res.json('Hello World')
})

export { productRouter }

