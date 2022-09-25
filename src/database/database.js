import Sequelize from "sequelize";

export const sequelize = new Sequelize('api_db', 'postgres', '8552', {
    host: 'localhost',
    dialect: "postgres"
});