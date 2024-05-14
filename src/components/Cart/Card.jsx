import React from 'react';
import style from './Card.module.scss';

import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const Card = ({ id, name, quantity, total, price }) => {
  const dispatch = useDispatch();

  const removeItemHadler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, price }));
  };
  return (
    <li className={style.card}>
      <div className={style['card__top']}>
        <h2 className={style['card__name']}>{name}</h2>
        <p>{price}$</p>
      </div>
      <div className={style['card__bot']}>
        <button className={style['card__button']} onClick={addItemHandler}>
          +
        </button>
        <p>x{quantity}</p>
        <button className={style['card__button']} onClick={removeItemHadler}>
          -
        </button>
        <p>total: {total}$</p>
      </div>
    </li>
  );
};

export default Card;
