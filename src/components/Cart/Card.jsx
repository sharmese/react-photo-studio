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
    <div className={style.card}>
      <div className={style['card__top']}>
        <h2>{name}</h2>
        <p>{price}$</p>
      </div>
      <div className={style['card__bot']}>
        <button onClick={addItemHandler}>add</button>
        <p>x{quantity}</p>
        <button onClick={removeItemHadler}>rm</button>
        <p>total: {total}$</p>
      </div>
    </div>
  );
};

export default Card;
