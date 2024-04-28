import style from './Header.module.scss';
import search from '../../assets/search.svg';
import heart from '../../assets/heart.svg';
import basket from '../../assets/basket.svg';
import profile from '../../assets/profile.svg';
import Menu from '../../components/Menu/Menu';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cart from '../../components/Cart/Cart';
import Login from '../../components/Login/Login';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Header = (props) => {
  //Стейт для серчбару в хедері
  const [isSearching, setIsSearching] = useState(false);

  const dispatch = useDispatch();
  //Отримання інформації стосовно корзини
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  //Отримання інформації стосовно юзера
  const toggleUser = useSelector((state) => state.user.userIsLogged);
  //Отримання інформації стосовно вікна реєстрації
  const toggleLogin = useSelector((state) => state.ui.loginIsVisible);
  //При візові функції зміна стейту вікна реєстрації на відкрите або закрите
  const toggleLoginHandler = () => {
    dispatch(uiActions.toggleLogin());
  };
  const toggleCart = useSelector((state) => state.ui.cartIsVisible);
  //При візові функції зміна стейту вікна корзини на відкрите або закрите
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const handleSearch = () => {
    setIsSearching(true);
  };
  const handleBlur = () => {
    setIsSearching(false);
  };

  return (
    <header className={style.header}>
      {toggleCart && <Cart onClose={toggleCartHandler} />}
      {!toggleUser && toggleLogin && <Login onClose={toggleLoginHandler} />}
      <nav className={`${style.nav} ${!props.isHome && 'jc-sb'}`}>
        {props.isHome ? (
          <div className={style['nav-first']}>
            <a
              href='#assortment'
              className={`${style['nav__link']} ${style['nav__link-1']}`}
            >
              асортимент
            </a>
            <a
              href='#about'
              className={`${style['nav__link']} ${style['nav__link-2']}`}
            >
              про магазин
            </a>
            <a
              href='#question'
              className={`${style['nav__link']} ${style['nav__link-3']}`}
            >
              q&a
            </a>
            <a
              href='#reviews'
              className={`${style['nav__link']} ${style['nav__link-4']}`}
            >
              відгуки
            </a>
          </div>
        ) : (
          <div className={style['nav-first']}>
            <Link to={'/'} className={style['nav__link']}>
              ASUNA
            </Link>
          </div>
        )}
        <div className={style['nav-second']}>
          <div className={style['nav-search']}>
            {isSearching ? (
              <SearchBar onBlur={handleBlur} />
            ) : (
              <button
                className={`${style['nav__link']} ${style['nav__link-5']}`}
                onClick={handleSearch}
              >
                <img src={search} alt='search' />
              </button>
            )}
          </div>
          <button className={`${style['nav__link']} ${style['nav__link-6']}`}>
            <img src={heart} alt='wishlist' />
          </button>
          <Link
            to={toggleUser ? '/profile' : ''}
            onClick={toggleUser ? '' : toggleLoginHandler}
            className={`${style['nav__link']} ${style['nav__link-7']}`}
          >
            <img src={profile} alt='profile' />
          </Link>
          <button
            onClick={toggleCartHandler}
            className={`${style['nav__link']} ${style['nav__cart']}`}
          >
            <img src={basket} alt='cart' />
            {cartQuantity > 0 && (
              <p className={style['nav__cart--counter']}>{cartQuantity}</p>
            )}
          </button>
        </div>
        <div className={style['nav-burger']}>
          <button className={style['nav-burger--btn']}>
            <Menu
              toggleUser={toggleUser}
              toggleLogin={toggleLogin}
              toggleLoginHandler={toggleLoginHandler}
              toggleCart={toggleCart}
              toggleCartHandler={toggleCartHandler}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
