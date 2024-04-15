//Слайс який зберігає об'єкти та виводить потрібний при переході на сторінку
//також може змінювати колір та розмір, якщо клієнт цього побажав

import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-init';

const querySnapshot = await getDocs(collection(db, 'products'));
const data = querySnapshot.docs.map((doc) => doc.data());
console.log(data);

const productSlice = createSlice({
  name: 'product',
  initialState: { items: data, reqItem: {}, err: undefined },
  reducers: {
    getProductById(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (!existingProduct) {
        state.err = 'PAGE DOESNT EXIST';
      } else {
        state.reqItem = existingProduct;
      }
    },
    changeProductColor(state, action) {
      const productCol = action.payload;
      state.reqItem.color = productCol;
    },
    changeProductSize(state, action) {
      const productSize = action.payload;
      state.reqItem.size = productSize;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
