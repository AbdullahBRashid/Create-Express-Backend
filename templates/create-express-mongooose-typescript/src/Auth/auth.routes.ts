import { Router } from "express";

import { 
    login,
    register,
    preRegister
} from "./auth.controller";

import {
    registerValidator,
    loginValidator,
    preRegisterValidator,
} from "./auth.validator";

import { validate } from '../middleware/validate'

const router = Router();

router.post('/login', loginValidator, validate, login);
router.post('/pre-register', preRegisterValidator, validate, preRegister);
router.post('/register', registerValidator, validate, register);

export default router;