import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import style from './Product.module.scss';
import { Link, useParams } from 'react-router-dom';
import { productActions } from '../../store/products-slice';
import { uiActions } from '../../store/ui-slice';
import { cartActions } from '../../store/cart-slice';
//desc price name color size quantity

const Product = () => {
  const product = useSelector((state) => state.product.reqItem);

  const [isLoading, setIsLoading] = useState(true);
  const [bigImage, setBigImage] = useState();

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getProductById(id));
    setIsLoading(false);
  }, [dispatch, id]);
  const toggleItemColor = (color) => {
    dispatch(productActions.changeProductColor(color));
  };
  const toggleItemSize = (size) => {
    dispatch(productActions.changeProductSize(size));
  };
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  let itemColor = [
    {
      name: 'black',
      content: 'Чорний',
    },
    {
      name: 'red',
      content: 'Червоний',
    },
    {
      name: 'white',
      content: 'Білий',
    },
    {
      name: 'blue',
      content: 'Синій',
    },
  ];
  let itemSize = [
    {
      name: 'large',
      content: 'L',
    },
    {
      name: 'medium',
      content: 'M',
    },
    {
      name: 'small',
      content: 'S',
    },
    {
      name: 'extraSmall',
      content: 'XS',
    },
  ];
  //Функція додає об'єкт до корзини юзера за допомогою метода addItemToCart в cart-slice
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        name: product.name,
      })
    );
  };
  const err = useSelector((state) => state.product.err);

  return (
    <div className='container'>
      <Header />
      <Link to={'/products'} className={style.btn}>
        Назад
      </Link>
      {err === undefined && !isLoading ? (
        <div className={style.product}>
          <div className={style['product__images']}>
            <div className={style['product__images--small']}>
              <img
                src={product.image[0]}
                alt='product'
                onClick={() => {
                  setBigImage(product.image[0]);
                }}
              />
              <img
                src={product.image[1]}
                alt='product'
                onClick={() => {
                  setBigImage(product.image[1]);
                }}
              />
              <img
                src={product.image[2]}
                alt='product'
                onClick={() => {
                  setBigImage(product.image[2]);
                }}
              />
            </div>
            <div className={style['product__images--big']}>
              <img
                src={bigImage !== undefined ? bigImage : product.image[0]}
                alt='product'
              />
            </div>
          </div>
          <div className={style['product__info']}>
            <div className={style['product__info-name']}>{product.name}</div>
            <div className={style['product__info-stars']}>*****</div>
            <div className={style['product__info-price']}>
              {product.price} uah
            </div>
            <div className={style['product__info-desc']}>
              <p>ОПИС</p>
              <hr />
              Пояс під підв'язку марсала. Виготовлений з еластичної тканини та
              сітки. Прикрашена синьою вишивкою. Має застібку ззаду. Французькі
              кліпси міцні і легко застібаються. Поліамід 72%, еластан 18%,
              віскоза 8%, поліестер 2%.
            </div>
            <div className={style['product__info-col']}>
              Колір
              {itemColor.map((item) => {
                return (
                  <div
                    key={item.name}
                    onClick={() => toggleItemColor(item.name)}
                    className={`${style.col} ${
                      item.name === product.color && style['col-active']
                    }`}
                  >
                    {item.content}
                  </div>
                );
              })}
            </div>
            <div className={style['product__info-size']}>
              Розмір
              {itemSize.map((item) => {
                return (
                  <div
                    key={item.name}
                    onClick={() => toggleItemSize(item.name)}
                    className={`${style.size} ${
                      item.name === product.size && style['col-active']
                    }`}
                  >
                    {item.content}
                  </div>
                );
              })}
            </div>
            <div className={style['product__info-quant']}>
              <p className={style['quant-p']}> Кількість</p>
              <button className={style['quant-btn']}>-</button>
              <input className={style['quant-input']} />
              <button className={style['quant-btn']}>+</button>
            </div>
            <div className={style['product__info-buy']}>
              <button onClick={addToCartHandler} className={style['buy-btn']}>
                В КОШИК
              </button>
              <button
                onClick={() => {
                  addToCartHandler();
                  toggleCartHandler();
                }}
                className={style['buy-btn']}
                style={{ background: 'black', color: 'white' }}
              >
                ЗАМОВИТИ
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='error'> {err}</div>
      )}
      {/* <div>
          <h2>{product.name}</h2>
          <div>
            <img src={product.image} alt='product' />
          </div>
          <p>{product.price}</p>
        </div> */}
      <Footer />
    </div>
  );
};

export default Product;
