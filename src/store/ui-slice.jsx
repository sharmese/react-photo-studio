//Слайс який зберігає інформацію щодо стейта корзини або вікна реєстрації та оновляє її
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartIsVisible: false,
    loginIsVisible: false,
    isLodaing: false,
  },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleLogin(state) {
      state.loginIsVisible = !state.loginIsVisible;
    },
    toggleLoading(state, action) {
      state.isLodaing = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
