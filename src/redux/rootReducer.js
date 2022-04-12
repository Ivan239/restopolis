import {combineReducers} from 'redux';

import cart from './cart/reducer';
import dish from './dish/reducer';
import account from './account/reducer';

export default combineReducers({
  cart,
  dish,
  account,
});
