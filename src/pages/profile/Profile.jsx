import React, { Fragment, useState } from 'react';
import style from './Profile.module.scss';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/profile-slice';

const Profile = () => {
  const dispatch = useDispatch();

  const handleExitUser = () => {
    dispatch(userActions.exitUser());
  };

  return (
    <Fragment>
      <Header />
      <div className={style.wrapper}>
        <div className={style.profile}>
          <div className={style['profile__background']}></div>
          <div className={style['profile__wrapper']}>
            <h1>Мій Аккаунт</h1>
            <div className={style['profile__content']}>
              <form className={style['profile__info']}>
                <input type='text' placeholder='ІМ’Я' />
                <input type='text' placeholder='ПРІЗВИЩЕ' />
                <input type='text' placeholder='ДАТА НАРОДЖЕННЯ' />
                <input type='tel' placeholder='ТЕЛЕФОН' />
                <input type='email' placeholder='ЕЛЕКТРОНА ПОШТА' />
                <button type='submit'>ЗБЕРЕГТИ</button>
              </form>
              <div className={style['profile__nav']}>
                <p className={style['profile__nav--link']}>ПРО АКАУНТ</p>
                <p className={style['profile__nav--link']}>ЗМІНИТИ ПАРОЛЬ</p>
                <p className={style['profile__nav--link']}>ІСТОРІЯ ЗАМОВЛЕНЬ</p>
                <Link
                  className={style['profile__nav--link']}
                  to={'/'}
                  style={{ cursor: 'pointer' }}
                  onClick={handleExitUser}
                >
                  ВИХІД
                </Link>
              </div>
            </div>
          </div>
          x
          {/* <Link onClick={handleExitUser} to='/'>
          Exit
        </Link> */}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
