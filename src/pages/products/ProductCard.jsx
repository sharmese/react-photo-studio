import React, { Fragment } from 'react';
import style from './Products.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';
const ProductCard = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        price: props.price,
        name: props.name,
      })
    );
  };
  return (
    <li className={style['product__wrapper']}>
      <Link to={`/product/${props.id}`}>
        <h2>{props.name}</h2>
        <div className={style['products__product']}>
          <img src={props.image} alt='product' />
        </div>
        <p>{props.price}uah</p>
        <hr />
      </Link>
      <div className={style['product__buttons']}>
        <button
          className={style['product--btn']}
          onClick={() => {
            addToCartHandler();
            toggleCartHandler();
          }}
        >
          buy
        </button>
        <button className={style['product--btn']} onClick={addToCartHandler}>
          add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
