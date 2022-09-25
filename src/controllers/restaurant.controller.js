import { Restaurant } from "../models/restaurant.js";

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const createRestaurants = async (req, res) => {
    try {
        const { rating, name, site, email, phone, street, city, state, lat, lng } = req.body;
        const newRestaurant = await Restaurant.create({ rating, name, site, email, phone, street, city, state, lat, lng })
        res.send('restaurant created successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const updateRestaurant = (req, res) => {
    res.send('getting Restaurants');
}
export const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
      await Restaurant.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
export const getRestaurant = async (req, res) => {
    res.send('get restaurant by id');

}









