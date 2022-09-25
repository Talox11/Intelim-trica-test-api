import { Restaurant } from "../models/restaurant.js";

export const getRestaurants = async (req, res) => {

    const restaurant = await Restaurant.findAll({
        atributes: ["rating", "name", "site", "email", "phone", "street", "city", "state", "lat", "lng"],
    });
    res.json(restaurant);
    res.send('getting Restaurants');
}
export const createRestaurants = async (req, res) => {
    const { rating, name, site, email, phone, street, city, state, lat, lng } = req.body;
    console.log(req.body)
    const newRestaurant = await Restaurant.create({
        rating, name, site, email, phone, street, city, state, lat, lng
    })
    console.log(newRestaurant);
    res.send('creating Restaurant');
}
export const updateRestaurant = (req, res) => {
    res.send('getting Restaurants');
}
export const deleteRestaurant = (req, res) => {
    res.send('creating Restaurant');
}









