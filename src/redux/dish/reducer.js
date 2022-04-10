import {
  ADD_TOPPING, CHANGE_SIZE, CLEAR_TOPPINGS, DELETE_TOPPING,
} from './types';

export default function reducer(state, action) {
  switch (action.type) {
    case CHANGE_SIZE:
      if (!state) {
        return [action.payload];
      }
      return [...state, action.payload];
    case ADD_TOPPING:
      if (!state) {
        return [action.payload];
      }
      return [...state, action.payload];
    case DELETE_TOPPING:
      if (!state) {
        return state;
      }
      return state.filter((topping) => topping.id !== action.payload);
    case CLEAR_TOPPINGS:
      return [];
    default: return state || [];
  }
}
