import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, loginIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleLogin(state) {
      state.loginIsVisible = !state.loginIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
