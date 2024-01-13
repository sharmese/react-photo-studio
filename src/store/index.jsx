import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import userSlice from './profile-slice';
import productSlice from './products-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
