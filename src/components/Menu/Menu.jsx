import React, { useState, useCallback } from 'react';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(undefined);

  const handleOpen = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isOpen]);

  return (
    <div className={style.menu}>
      <div className={style['menu__button']} onClick={handleOpen}>
        <div
          className={`${style.line} ${
            isOpen
              ? style['line-1']
              : isOpen === undefined
              ? ''
              : style['close-1']
          }`}
        ></div>
        <div
          className={`${style.line} ${
            isOpen
              ? style['line-2']
              : isOpen === undefined
              ? ''
              : style['close-2']
          }`}
        ></div>
        <div
          className={`${style.line} ${
            isOpen
              ? style['line-3']
              : isOpen === undefined
              ? ''
              : style['close-3']
          }`}
        ></div>
      </div>
      <div
        className={`${
          isOpen
            ? style['menu__open']
            : isOpen === undefined
            ? style['menu__hidden']
            : style['menu__close']
        }`}
      >
        <div className={style['menu__background']}></div>
        <div className={style['menu__container']}>
          <div className={style['menu__links']}>
            <Link to={'/'} className={style['menu__link']}>
              home
            </Link>
            <Link
              to={props.toggleUser && '/profile'}
              onClick={props.toggleLoginHandler}
              className={style['menu__link']}
            >
              profile
            </Link>
            <div
              onClick={props.toggleCartHandler}
              className={style['menu__link']}
            >
              cart
            </div>
            <div className={style['menu__link']}>reviews</div>
            <Link to={'/products'} className={style['menu__link']}>
              shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
