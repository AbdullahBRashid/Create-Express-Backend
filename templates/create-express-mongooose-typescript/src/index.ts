import express from 'express';
import { connect } from 'mongoose'
import cors from 'cors'

// Config Imports
import serverConfig from './configs/server.config'

// Routes Import
import appRouter from './routes';
import authRouter from './Auth/auth.routes';

// DB
connect(serverConfig.mongoURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use(
    cors({
        origin: serverConfig.corsURLS,
        credentials: true,
    })
)

// Routes
app.use('/', appRouter);
app.use('/api/auth', authRouter)

// Listen
app.listen(serverConfig.httpPort, () => console.log(`Server running on port ${serverConfig.httpPort}`))