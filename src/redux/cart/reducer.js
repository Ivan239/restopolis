import { ADD_DISH, DELETE_DISH, LOAD_CART } from "./types";

export default function reducer(state, action) {
    switch (action.type) {
        case LOAD_CART:
            return state;
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
        default: return state || [];
    }
}
