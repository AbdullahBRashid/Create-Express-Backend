import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../Users/user.model';


function register(req: Request, res: Response) {
    let { name, email, password, username } = req.body;
    let user = new User({ name, email, password, username });
    user.save()
        .then((user) => {
            return res.status(200).json({
                message: 'User created successfully',
                user
            })
        })
        .catch((err) => {
            if (err.code === 11000) {
                return res.status(400).json({
                    message: 'Email or username already exists'
                })
            }
            return res.status(500).json({
                message: 'Something went wrong',
                err
            })
        })
}

function preRegister(req: Request, res: Response) {
    
}

function login(req: Request, res: Response) {
    let { email, password } = req.body;

    User.findOne({ email }).then((user: any) => {
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            })
        }
        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: 'Incorrect password'
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        const { _id, name, email, username } = user;

        return res.status(200).json({
            message: 'Login successful',
            user: { _id, name, email, username },
            token
        })
    })
}

export { login, register, preRegister }