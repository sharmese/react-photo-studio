import React from 'react';
import style from './Reviews.module.scss';
import logo from '../../../assets/logo.png';
import rev1 from '../../../assets/rev1.png';
import arrow from '../../../assets/arrow.svg';

const Reviews = () => {
  return (
    <div className={style.reviews} id='reviews'>
      <div className={style['reviews__background']}></div>

      <div className='container'>
        <div className={style['reviews__heading']}>
          відгуки
          <img
            className={style['reviews__heading--logo']}
            src={logo}
            alt='logo'
          />
        </div>
        <div className={style['reviews__content']}>
          <div className={style.arrow}>
            <img className={style['arrow-left']} src={arrow} alt='arrow' />
            <img className={style['arrow-right']} src={arrow} alt='arrow' />
            <div className={style['reviews__content--top']}>
              <img src={rev1} alt='400x199' />
              <img src={rev1} alt='400x199' />
              <img src={rev1} alt='400x199' />
            </div>
          </div>

          <div className={style['reviews__content--bot']}>
            <img src={rev1} alt='400x199' />
            <img src={rev1} alt='400x199' />
            <img src={rev1} alt='400x199' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
