import Sequelize from "sequelize";
import 'dotenv/config.js';

const DB_USERNAME = process.env.DB_USERNAME
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const URI = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
//postgres://nwuurhotgsjaap:1c19817aa8761680d7f8bc5e69e46008cc069ce689e4e37b6750fb857c3420ac@ec2-3-214-2-141.compute-1.amazonaws.com:5432/d76djgu2rdjgnb

export const sequelize = new Sequelize(URI);

sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection established successfully')
    })
    .catch(err => {
        console.log('Unable to connect to DB', err);
    });


