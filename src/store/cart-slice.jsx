//Слайс для корзини на сайті, для зберігання та видалення об'єктів зі стору

import { createSlice } from '@reduxjs/toolkit';

import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-init';
const setCartByUid = async (items) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, 'user-cart', user.uid), {
      cart: items,
    });
  } else {
    localStorage.setItem('cart', JSON.stringify(items));
  }
};
let quant = 1;
let amount = 1;

// items.forEach((item) => {
//   quant += item.quantity;
// });
// items.forEach((item) => {
//   amount += item.totalPrice;
// });
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: quant,
    totalAmount: amount,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      setCartByUid(state.items);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      setCartByUid(state.items);
    },
    getItemsFromUserData(state, action) {
      state.items = action.payload;
      let price = 0;
      let quantity = 0;

      action.payload.forEach((item) => {
        price += item.totalPrice;
      });
      action.payload.forEach((item) => {
        quantity += item.quantity;
      });
      state.totalAmount = price;
      state.totalQuantity = quantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
