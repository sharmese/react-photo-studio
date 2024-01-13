import React, { Fragment } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import style from './Products.module.scss';
import image from '../../assets/imagefull.jpeg';
import ProductCard from './ProductCard';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Suit',
    price: 20,
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

const Products = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <ul className={style.products}>
          {DUMMY_PRODUCTS.map((product) => {
            return (
              <li>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
