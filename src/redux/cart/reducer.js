import { ADD_DISH, DELETE_CART, DELETE_DISH, UPLOAD_CART } from "./types";

export default function reducer(state, action) {
    switch (action.type) {
        case UPLOAD_CART:
            return action.payload;
        case ADD_DISH:
            if (!state) {
                return [action.payload];
            }
            return [...state, action.payload];
        case DELETE_DISH:
            if (!state) {
                return state;
            }
            return state.filter((dish) => dish.id !== action.payload);
        case DELETE_CART:
            return [];
        default: return state || [];
    }
}
