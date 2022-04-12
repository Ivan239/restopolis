import {NEW_ACCOUNT, DELETE_ACCOUNT, LOAD_BOOKINGS, LOAD_ORDERS, ADD_BOOKING, ADD_ORDER} from './types';

export const newAccount = user => ({
  type: NEW_ACCOUNT,
  payload: user,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const loadBookings = bookings => ({
  type: LOAD_BOOKINGS,
  payload: bookings,
});

export const loadOrders = orders => ({
  type: LOAD_ORDERS,
  payload: orders,
});

export const addBooking = booking => ({
  type: ADD_BOOKING,
  payload: booking,
});

export const addOrder = order => ({
  type: ADD_ORDER,
  payload: order,
});
