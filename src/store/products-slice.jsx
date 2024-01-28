import { createSlice } from '@reduxjs/toolkit';
import image from '../assets/imagefull.jpeg';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    shortName: 'DARLING',
    name: 'СПОКУСЛИВИЙ КОМПЛЕКТ «DARLING», КОЛІР ЧОРНИЙ',
    price: 1648,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '2',
    shortName: 'SOMETHING',
    name: 'Sweater',
    price: 10,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '3',
    shortName: 'BEEWITCH',
    name: 'Dress',
    price: 30,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '4',
    shortName: 'COOLIE',
    name: 'Cringe',
    price: 20,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '5',
    shortName: 'RUBIES',
    name: 'Machine',
    price: 100,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '6',
    shortName: 'DIAMOND',
    name: 'Loot',
    price: 50,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '7',
    shortName: 'MATEROKE',
    name: 'Hook',
    price: 20,
    image: image,
    color: 'black',
    size: 'large',
  },
  {
    id: '8',
    shortName: 'GEOLOC',
    name: 'Rook',
    price: 30,
    image: image,
    color: 'black',
    size: 'large',
  },
];
const productSlice = createSlice({
  name: 'product',
  initialState: { items: DUMMY_PRODUCTS, reqItem: {}, err: undefined },
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
