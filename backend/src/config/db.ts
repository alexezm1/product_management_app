import 'dotenv/config';
import { Sequelize } from "sequelize-typescript";

// Passing a connection URI
const db = new Sequelize(process.env.POSTGRES_URL, {
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
})

export default db
