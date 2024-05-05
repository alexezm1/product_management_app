import { NextFunction, Request, Response } from "express"
import { check, param, validationResult } from 'express-validator'



export const createProductValidation = async (req: Request, res: Response, next: NextFunction) => {
    await check('name').notEmpty().withMessage('Product name is missing').run(req)
    await check('price')
        .isNumeric().withMessage('Product price is invalid')
        .notEmpty().withMessage('Product price is missing')
        .custom(value => value > 0).withMessage('Product price must be greater than 0').run(req)

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}

export const updateProductValidation = async (req: Request, res: Response, next: NextFunction) => {
    await check('name').notEmpty().withMessage('Product name is missing').run(req)
    await check('price')
        .isNumeric().withMessage('Product price is invalid')
        .notEmpty().withMessage('Product price is missing')
        .custom(value => value > 0).withMessage('Product price must be greater than 0').run(req)
    await check('availability').isBoolean().withMessage('Availability Invalid').run(req)

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}

export const patchValidation = async (req: Request, res: Response, next: NextFunction) => {

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}

export const getProductByIdValidation = async (req: Request, res: Response, next: NextFunction) => {
    await param('id').isInt().withMessage("Invalid Product ID").run(req)

    let errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}