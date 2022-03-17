import { ADD_DISH, DELETE_DISH, LOAD_CART } from "./types";

export const loadCart = () => ({
    type: LOAD_CART,
});

export const deleteDish = (dishId) => ({
    type: DELETE_DISH,
    payload: dishId,
});

export const addDish = (newDish) => ({
    type: ADD_DISH,
    payload: newDish,
});