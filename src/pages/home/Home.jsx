import { Fragment, useState } from 'react';
import About from './about/About';
import Assortment from './assortment/Assortment';
import Header from '../../layout/header/Header';
import Questions from './questions/Questions';
import Reviews from './reviews/Reviews';
import Login from '../../components/Login/Login';
import Cart from '../../components/Cart/Cart';
import style from '../../layout/header/Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    name: 'green',
    desc: 'blue',
    price: 5,
  },
  {
    id: 'p2',
    name: 'red',
    desc: 'white',
    price: 1,
  },
  {
    id: 'p3',
    name: 'light',
    desc: 'dark',
    price: 8,
  },
];

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className={style['banner-container']}>
        <div className={style['header__background']}></div>
        <div className={style['header__banner']}>
          <h1 className={style['header__banner-text']}> asuna</h1>
          <button className={style.btn}>до покупок </button>
        </div>
      </div>
      <Assortment products={DUMMY_PRODUCTS} />
      <About />
      <Reviews />
      <Questions />
    </Fragment>
  );
};

export default Home;
