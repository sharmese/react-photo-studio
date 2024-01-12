import React, { Fragment } from 'react';
import style from './Profile.module.scss';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Profile = () => {
  return (
    <Fragment>
      <Header />
      <div className={style.wrapper}>
        <button> Exit</button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
