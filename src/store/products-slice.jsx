//Слайс який зберігає об'єкти та виводить потрібний при переході на сторінку
//також може змінювати колір та розмір, якщо клієнт цього побажав

import { createSlice } from '@reduxjs/toolkit';

import image1_1 from '../assets/product1_1.jpg';
import image1_2 from '../assets/product1_2.jpg';
import image1_3 from '../assets/product1_3.jpg';
import image2_1 from '../assets/product2_1.jpg';
import image2_2 from '../assets/product2_2.jpg';
import image2_3 from '../assets/product2_3.jpg';
import image3_1 from '../assets/product3_1.jpg';
import image3_2 from '../assets/product3_2.jpg';
import image3_3 from '../assets/product3_3.jpg';
import image4_1 from '../assets/product4_1.jpg';
import image4_2 from '../assets/product4_2.jpg';
import image4_3 from '../assets/product4_3.jpg';
import image5_1 from '../assets/product5_1.jpg';
import image5_2 from '../assets/product5_2.jpg';
import image5_3 from '../assets/product5_3.jpg';
import image6_1 from '../assets/product6_1.jpg';
import image6_2 from '../assets/product6_2.jpg';
import image6_3 from '../assets/product6_3.jpg';
import image7_1 from '../assets/product7_1.jpg';
import image7_2 from '../assets/product7_2.jpg';
import image7_3 from '../assets/product7_3.jpg';
import image8_1 from '../assets/product8_1.jpg';
import image8_2 from '../assets/product8_2.jpg';
import image8_3 from '../assets/product8_3.jpg';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    shortName: 'DARLING',
    name: 'СПОКУСЛИВИЙ КОМПЛЕКТ «DARLING», КОЛІР ЧОРНИЙ',
    price: 1648,
    image: [image1_1, image1_2, image1_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '2',
    shortName: 'SOMETHING',
    name: 'Sweater',
    price: 10,
    image: [image2_1, image2_2, image2_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '3',
    shortName: 'BEEWITCH',
    name: 'Dress',
    price: 30,
    image: [image3_1, image3_2, image3_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '4',
    shortName: 'COOLIE',
    name: 'Cringe',
    price: 20,
    image: [image4_1, image4_2, image4_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '5',
    shortName: 'RUBIES',
    name: 'Machine',
    price: 100,
    image: [image5_1, image5_2, image5_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '6',
    shortName: 'DIAMOND',
    name: 'Loot',
    price: 50,
    image: [image6_1, image6_2, image6_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '7',
    shortName: 'MATEROKE',
    name: 'Hook',
    price: 20,
    image: [image7_1, image7_2, image7_3],
    color: 'black',
    size: 'large',
  },
  {
    id: '8',
    shortName: 'GEOLOC',
    name: 'Rook',
    price: 30,
    image: [image8_1, image8_2, image8_3],
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
