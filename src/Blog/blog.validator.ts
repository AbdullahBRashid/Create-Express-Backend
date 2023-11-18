import { check } from "express-validator";

const blogAddValidator = [
    check('title', 'Title is required').not().isEmpty(),
    check('body', 'Body is required').not().isEmpty(),
]

export { blogAddValidator }