import React, { Fragment, useCallback, useEffect } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import { useSelector } from 'react-redux';
import style from './Product.module.scss';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/products-slice';
//desc price name color size quantity

const Product = (props) => {
  const dispatch = useDispatch();

  const getIdHandler = () => {
    dispatch(productActions.getProductById(props.id));
    console.log(props.id);
  };
  useEffect(() => {
    getIdHandler();
  }, []);
  const product = useSelector((state) => state.product.reqItem);

  return (
    <div className='container'>
      <Header />
      <div className={'btn'}>
        <button>Назад</button>
      </div>
      <div className={style.product}>
        <div className={style['product__images']}>
          <div className={style['product__images--small']}>
            <img src={product.image} alt='product' />
            <img src={product.image} alt='product' />
            <img src={product.image} alt='product' />
          </div>
          <div className={style['product__images--big']}>
            <img src={product.image} alt='product' />
          </div>
        </div>
        <div className={style['product__info']}>
          <div className={style['product__info-name']}>{product.name}</div>
          <div className={style['produdct__info-stars']}></div>
          <div className={style['product__info-price']}>{product.price}</div>
          <div className={style['product__info-desc']}>
            <p>ОПИС</p>
            Пояс під підв'язку марсала. Виготовлений з еластичної тканини та
            сітки. Прикрашена синьою вишивкою. Має застібку ззаду. Французькі
            кліпси міцні і легко застібаються. Поліамід 72%, еластан 18%,
            віскоза 8%, поліестер 2%.
          </div>
          <div className={style['product__info-col']}>red</div>
          <div className={style['product__info-size']}>10</div>
          <div className={style['product__info-quant']}>1</div>
          <div className={style['product__info-buy']}>buy</div>
        </div>
      </div>
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
