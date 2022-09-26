import Sequelize from "sequelize";
import 'dotenv/config.js';

const DB_USERNAME = process.env.DB_USERNAME
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE

export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres"
});