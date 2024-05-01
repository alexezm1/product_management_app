import colors from 'colors';
import 'dotenv/config';
import express from 'express';
import db from './config/db';
import { productRouter } from './routes/router';

// Connection to DB
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.white('Connection has been established successfully.'));
    } catch (error) {
        console.error(colors.bgRed.white('Unable to connect to the database:'), error);
    }
}
connectDB()
const server = express()

server.use('/api/products', productRouter)

export default server;