import { Sequelize } from "sequelize-typescript";

// Passing a connection URI
const db = new Sequelize(process.env.POSTGRES_URL, {
    models: [__dirname + '/../models/**/*.ts']
})

export default db
