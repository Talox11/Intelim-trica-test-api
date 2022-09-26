import express from "express";
import morgan from "morgan";
import restaurantRoutes from './routes/routes.js'
const port = process.env.PORT || 9000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API For Melp '})
})

app.use(restaurantRoutes);

export default app;