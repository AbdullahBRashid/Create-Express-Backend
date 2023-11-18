import { check } from 'express-validator'
import { Request, Response } from 'express'

const registerValidator = [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
    check('name', 'Name is required').not().isEmpty(),
    check('username', 'Username is required').not().isEmpty(),
]

const loginValidator = [
    check('email', 'Email is required').isEmail().not().isEmpty().escape().trim(),
    check('password', 'Password is required').isLength({ min: 6 }),
]

const preRegisterValidator = [
    check('email', 'Email is required').isEmail().not().isEmpty().escape().trim(),
]



export { registerValidator, loginValidator, preRegisterValidator}