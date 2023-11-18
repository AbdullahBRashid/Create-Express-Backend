import Blog from "./blog.model";
import { Request, Response } from "express";

export function blogAdd(req: any, res: Response) {
    const { title, body, thumbnail } = req.body

    const blog = new Blog({
        title,
        body,
        thumbnail,
        author: (req.user as any)._id
    })

    blog.save()
        .then((blog) => {
            res.status(201).json({
                message: 'Blog added successfully',
                blog
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: 'Unable to add blog',
                error
            })
        })
}

export function blogGetAll(req: any, res: Response) {
    
}

export function blogGetOne(req: any, res: Response) {
        
}

export function blogUpdate(req: any, res: Response) {

}

export function blogDelete(req: any, res: Response) {

}

