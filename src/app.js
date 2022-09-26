import express from "express";
import morgan from "morgan";
import restaurantRoutes from './routes/routes.js'

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.listen(4000,() => {
    console.log(`listening on port ${4000}`);
})


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API For Melp '})
})

app.use(restaurantRoutes);

export default app;