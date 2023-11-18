import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            trim: true,
            unique: true
        },
        body: {
            type: String,
            required: true,
            min: 3,
            trim: true,
        },
        thumbnail: {
            data: Buffer,
            contentType: String
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)

export default mongoose.model('Blog', blogSchema)