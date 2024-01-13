import { createSlice } from '@reduxjs/toolkit';
import image from '../assets/imagefull.jpeg';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'СПОКУСЛИВИЙ КОМПЛЕКТ «DARLING», КОЛІР ЧОРНИЙ',
    price: 1648,
    image: image,
  },
  {
    id: '2',
    name: 'Sweater',
    price: 10,
    image: image,
  },
  {
    id: '3',
    name: 'Dress',
    price: 30,
    image: image,
  },
  {
    id: '4',
    name: 'Cringe',
    price: 20,
    image: image,
  },
  {
    id: '5',
    name: 'Machine',
    price: 100,
    image: image,
  },
  {
    id: '6',
    name: 'Loot',
    price: 50,
    image: image,
  },
  {
    id: '7',
    name: 'Hook',
    price: 20,
    image: image,
  },
  {
    id: '8',
    name: 'Rook',
    price: 30,
    image: image,
  },
];
const productSlice = createSlice({
  name: 'product',
  initialState: { items: DUMMY_PRODUCTS, reqItem: {} },
  reducers: {
    getProductById(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      state.reqItem = existingProduct;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
