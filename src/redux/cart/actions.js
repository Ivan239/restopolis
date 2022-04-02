import { ADD_DISH, DELETE_CART, DELETE_DISH } from "./types";

export const deleteDish = (dishId) => ({
    type: DELETE_DISH,
    payload: dishId,
});

export const addDish = (newDish) => ({
    type: ADD_DISH,
    payload: newDish,
});

export const deleteCart = () => ({
    type: DELETE_CART,
})