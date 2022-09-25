import { DataTypes } from 'sequelize';
import { } from 'sequelize'
import { sequelize } from "../database/database.js";


export const Restaurant = sequelize.define('restaurantes', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true,
    },
    rating: { type: DataTypes.SMALLINT },
    name: { type: DataTypes.STRING },
    site: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    street: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    lat: { type: DataTypes.FLOAT },
    lng: { type: DataTypes.FLOAT },
}, {
    timestamp: false, createdAt: false, // don't add createdAt attribute
    updatedAt: false,
});