import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll()
        res.json({ data: products })
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        // FIND PRODUCT
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        // UPDATE PRODUCT
        await product.update(req.body)


        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const updateAvailability = async (req: Request, res: Response) => {
    try {
        // FIND PRODUCT
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        // UPDATE PRODUCT AVAILABILITY
        product.availability = !product.dataValues.availability
        await product.save()

        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        // FIND PRODUCT
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        await product.destroy()
        res.json({ data: { message: "Product has been deleted" } })
    } catch (error) {
        console.log(error)
    }
}

export const hideProduct = async (req: Request, res: Response) => {
    try {
        // FIND PRODUCT
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }

        // UPDATE PRODUCT HIDDEN
        product.hidden = !product.dataValues.hidden
        await product.save()

        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}