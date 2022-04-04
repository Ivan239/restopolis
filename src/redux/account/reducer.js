import { NEW_ACCOUNT, DELETE_ACCOUNT, LOAD_BOOKINGS, LOAD_ORDERS } from "./types";

export default function reducer(state, action) {
    switch (action.type) {
        case NEW_ACCOUNT:
            return action.payload;
        case LOAD_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
            };
        case LOAD_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        case DELETE_ACCOUNT:
            return {};
        default: return state || {};
    }
}
