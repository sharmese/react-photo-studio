import { Fragment } from 'react';
import About from './about/About';
import Assortment from './assortment/Assortment';
import Header from '../../layout/header/Header';
import Questions from './questions/Questions';
import Reviews from './reviews/Reviews';
import style from '../../layout/header/Header.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <Header isHome={true} />
      <div className={style['banner-container']}>
        <div className={style['header__background']}></div>
        <div className={style['header__banner']}>
          <h1 className={style['header__banner-text']}> asuna</h1>
          <Link to={'/products'} className={style.btn}>
            до покупок{' '}
          </Link>
        </div>
      </div>
      <Assortment />
      <About />
      <Reviews />
      <Questions />
    </Fragment>
  );
};

export default Home;
