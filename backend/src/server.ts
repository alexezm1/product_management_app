import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import db from './config/db';
import { swaggerSpec, swaggerUIOptions } from './config/swagger';
import { productRouter } from './routes/productRouter';

// Connection to DB
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.bgGreen.white('Connection has been established successfully.'));
    } catch (error) {
        console.error(colors.bgRed.white('Unable to connect to the database:'), error);
    }
}
connectDB()

// Express Instance
const server = express()

// Enable CORS
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('CORS Error'))
        }
    }
}

server.use(cors(corsOptions))

// Read FormData
server.use(express.json())
server.use(express.urlencoded())

server.use('/api/products', productRouter)

// DOCS
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUIOptions))

export default server;