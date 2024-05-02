import { NextFunction, Request, Response } from "express"
import { check, validationResult } from 'express-validator'


export const productValidation = async (req: Request, res: Response, next: NextFunction) => {
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