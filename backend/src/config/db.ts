import { Sequelize } from "sequelize";

// Passing a connection URI
const db = new Sequelize(process.env.POSTGRES_URL)

export default db
