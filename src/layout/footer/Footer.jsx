import React from 'react';
import style from './Footer.module.scss';
import facebook from '../../assets/facebook.svg';
import telegram from '../../assets/telegram.svg';
import instagram from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <div className='container'>
      <footer className={style.footer}>
        <div className={style['footer__heading']}>ASUNA</div>
        <div className={style['footer__links']}>
          <div className={style['footer__links--icons']}>
            <a href='http://facebook.com'>
              <img src={facebook} alt='facebook' />
            </a>
            <a href='https://web.telegram.org'>
              <img src={telegram} alt='telegram' />
            </a>
            <a href='https://instagram.com'>
              <img src={instagram} alt='instagram' />
            </a>
          </div>
          <div className={style['footer__links--inst']}>@asuna_re</div>
        </div>
        <div className={style['footer__info']}>
          <p>
            © 2023 RECORD All rights <br /> reserved.
          </p>
          <p>Політика конфіденційності</p>
          <p>Договір публічної оферти</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
