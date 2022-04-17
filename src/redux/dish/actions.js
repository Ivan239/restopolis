import { ADD_TOPPING, CLEAR_TOPPINGS, DELETE_TOPPING } from './types';

export const deleteTopping = (toppingId) => ({
  type: DELETE_TOPPING,
  payload: toppingId,
});

export const addTopping = (newDish) => ({
  type: ADD_TOPPING,
  payload: newDish,
});

export const clearToppings = () => ({
  type: CLEAR_TOPPINGS,
});
