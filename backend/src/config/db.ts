import { Sequelize } from "sequelize-typescript";

// Passing a connection URI
const db = new Sequelize(process.env.POSTGRES_URL)

export default db
