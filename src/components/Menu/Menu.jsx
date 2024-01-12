import React, { useState, useCallback } from 'react';
import style from './Menu.module.scss';

const Menu = () => {
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
            <div className={style['menu__link']}>profile</div>
            <div className={style['menu__link']}>wishlist</div>
            <div className={style['menu__link']}>cart</div>
            <div className={style['menu__link']}>reviews</div>
            <div className={style['menu__link']}>assortment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
