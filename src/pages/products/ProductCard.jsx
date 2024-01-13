import React, { Fragment } from 'react';
import style from './Products.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const ProductCard = (props) => {
  const dispatch = useDispatch();

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
    <Fragment>
      <Link to={`/product/${props.id}`}>
        <h2>{props.name}</h2>
        <div className={style['products__product']}>
          <img src={props.image} alt='product' />
        </div>
        <p>{props.price}</p>
      </Link>
      <button onClick={addToCartHandler}>buy</button>
      <button onClick={addToCartHandler}>add to cart</button>
    </Fragment>
  );
};

export default ProductCard;
