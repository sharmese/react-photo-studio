import React, { useMemo } from 'react';
import style from './SearchBar.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef(null);
  const products = useSelector((state) => state.product.items);
  //Визивається при введенні кожної літери в графі серчбару
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  //Функція що скриває виведену інформацію під серчбаром після того як юзер натискне в інше місце на сайті
  const handleBlur = () => {
    setTimeout(() => {
      props.onBlur();
    }, 200);
  };
  //Функція для пошуку потрібного об'єкту за допомогою колбеку useMemo визивається тільки в випадку зміни залежних повертає ссилку на сторінку об'єкту

  const searchItem = useMemo(
    () =>
      //Метод массиву який перевіряє співпадіння введених юзером данних з існуючими
      products.map((item, index) => {
        if (item.name.toLowerCase().match(searchInput.toLowerCase())) {
          return (
            <Link
              to={`/product/${item.id}`}
              className={style['searchbar__item']}
              key={index}
            >
              {item.name} {`${item.price}$`}
            </Link>
          );
        }

        return null;
      }),
    [products, searchInput]
  );

  return (
    <div className={style.searchbar} onBlur={handleBlur}>
      <input
        className={style['searchbar__input']}
        type='text'
        placeholder='search..'
        onChange={handleSearch}
        value={searchInput}
        ref={searchRef}
      />
      {searchInput.length > 0 && (
        <div className={style['searchbar__items']}>{searchItem}</div>
      )}
    </div>
  );
};

export default SearchBar;
