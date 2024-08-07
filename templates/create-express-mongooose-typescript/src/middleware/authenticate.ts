import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import User from "../Users/user.model";


export async function authentiateToken(req: Request, res: Response, next: Function) {
    let token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided'
        })
    }

    token = token.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        let user = await User.findById(decoded._id)
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            })
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid token'
        })
    }
}