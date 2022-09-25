import { Router } from 'express'
import { 
    createRestaurants, 
    getRestaurants, 
    updateRestaurant, 
    deleteRestaurant, 
    getRestaurant, 
    getRestaurantsStats } from '../controllers/restaurant.controller.js'


const router = Router();

router.post("/restaurants/", createRestaurants);
router.get("/restaurants/", getRestaurants);
router.put("/restaurant/:id", updateRestaurant);
router.delete("/restaurant/:id", deleteRestaurant);
router.get("/restaurant/:id", getRestaurant);
router.get("/restaurants/statistics?", getRestaurantsStats);

export default router;