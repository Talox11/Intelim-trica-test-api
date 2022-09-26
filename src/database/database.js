import Sequelize from "sequelize";
import 'dotenv/config.js';

const DB_USERNAME = process.env.DB_USERNAME
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

export const sequelize = new Sequelize({
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection established successfully')
    })
    .catch(err => {
        console.log('Unable to connect to DB', err);
    });


