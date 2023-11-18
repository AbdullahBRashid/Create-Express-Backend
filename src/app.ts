import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: __dirname + '/.env' })

// Routes Import
import { authRouter } from './Auth/auth.routes';
import { blogRouter } from './Blog/blog.routes';

// DB
mongoose.connect('mongodb://localhost:27017/express-auth')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))

// App
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

// Routes
app.use('/api/auth', authRouter)
app.use('/api/blog', blogRouter)

// Listen
app.listen(3000, () => console.log('Server running on port 3000'))