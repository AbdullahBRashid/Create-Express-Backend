import { validationResult } from 'express-validator'
import { Request, Response } from 'express'

export const validate = (req: Request, res: Response, next: Function) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors: object[] = []
    errors.array().map(err => extractedErrors.push({ [err.type]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}