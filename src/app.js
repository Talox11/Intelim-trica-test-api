import express from "express";
import morgan from "morgan";
import restaurantRoutes from './routes/routes.js'

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(restaurantRoutes);

export default app;