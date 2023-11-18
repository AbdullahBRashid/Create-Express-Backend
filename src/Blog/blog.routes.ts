import { Router } from "express";

import { blogAddValidator } from "./blog.validator";
import { validate } from "../common/validate";
import { authentiateToken } from "../common/authenticate";
import { blogAdd, blogGetAll, blogGetOne, blogUpdate, blogDelete } from "./blog.controller";

const router = Router()

router.post('/add', blogAddValidator, validate, authentiateToken, blogAdd)
router.get('/all', validate, blogGetAll)
router.get('/one/:id', validate, blogGetOne)
router.put('/update/:id', validate, blogUpdate)
router.delete('/delete/:id', validate, blogDelete)

export { router as blogRouter }