import {
  NEW_ACCOUNT, DELETE_ACCOUNT, LOAD_BOOKINGS, LOAD_ORDERS, ADD_BOOKING, ADD_ORDER,
} from './types';

export default function reducer(state, action) {
  switch (action.type) {
    case NEW_ACCOUNT:
      return action.payload;
    case LOAD_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        bookingAmount: action.payload.length,
      };
    case LOAD_ORDERS:
      return {
        ...state,
        orders: action.payload,
        orderAmount: action.payload.length,
      };
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        bookingAmount: state.bookingAmount + 1,
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        orderAmount: state.orderAmount + 1,
      };
    case DELETE_ACCOUNT:
      return {};
    default: return state || {};
  }
}
