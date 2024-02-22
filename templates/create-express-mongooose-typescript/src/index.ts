import express from 'express';
import { connect } from 'mongoose'
import { config } from 'dotenv'

config()

// Routes Import
import appRouter from './routes';
import authRouter from './Auth/auth.routes';

// DB
connect(process.env.MONGO_URL as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
})

// Routes
app.use('/', appRouter);
app.use('/api/auth', authRouter)

// Listen
const PORT = process.env.PORT as string || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))