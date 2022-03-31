import { combineReducers } from 'redux';

import cart from './cart/reducer';
import dish from './dish/reducer'

export default combineReducers({
    cart,
    dish,
});
