import { Router } from 'express'
import { createRestaurants, getRestaurants, updateRestaurant, deleteRestaurant, getRestaurant } from '../controllers/restaurant.controller.js'


const router = Router();

router.post("/restaurants/", createRestaurants);
router.get("/restaurants/", getRestaurants);
router.put("/restaurant/:id", updateRestaurant);
router.delete("/restaurant/:id", deleteRestaurant);
router.get("/restaurant/:id", getRestaurant);

export default router;