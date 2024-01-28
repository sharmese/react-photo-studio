import React, { Fragment } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import style from './Products.module.scss';
import image from '../../assets/imagefull.jpeg';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector((state) => state.product.items);
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <ul className={style.products}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.shortName}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
