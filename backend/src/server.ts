import colors from 'colors';
import 'dotenv/config';
import express from 'express';
import db from './config/db';
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

// Read FormData
server.use(express.json())
server.use(express.urlencoded())

server.use('/api/products', productRouter)

// server.get('/api', (req, res) => {
//     res.json('Desde Api')
// })

export default server;