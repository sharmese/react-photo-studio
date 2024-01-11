import React, { useMemo } from 'react';
import style from './SearchBar.module.scss';
import { useState, useRef, useEffect } from 'react';

const DUMMY_SEARCH = [
  { name: 'Belgium', continent: 'Europe' },
  { name: 'India', continent: 'Asia' },
  { name: 'Bolivia', continent: 'South America' },
  { name: 'Ghana', continent: 'Africa' },
  { name: 'Japan', continent: 'Asia' },
  { name: 'Canada', continent: 'North America' },
  { name: 'New Zealand', continent: 'Australasia' },
  { name: 'Italy', continent: 'Europe' },
  { name: 'South Africa', continent: 'Africa' },
  { name: 'China', continent: 'Asia' },
  { name: 'Paraguay', continent: 'South America' },
  { name: 'Usa', continent: 'North America' },
  { name: 'France', continent: 'Europe' },
  { name: 'Botswana', continent: 'Africa' },
  { name: 'Spain', continent: 'Europe' },
  { name: 'Senegal', continent: 'Africa' },
  { name: 'Brazil', continent: 'South America' },
  { name: 'Denmark', continent: 'Europe' },
  { name: 'Mexico', continent: 'South America' },
  { name: 'Australia', continent: 'Australasia' },
  { name: 'Tanzania', continent: 'Africa' },
  { name: 'Bangladesh', continent: 'Asia' },
  { name: 'Portugal', continent: 'Europe' },
  { name: 'Pakistan', continent: 'Asia' },
];

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const searchItem = useMemo(
    () =>
      DUMMY_SEARCH.map((item, index) => {
        if (item.name.toLowerCase().match(searchInput)) {
          return (
            <div className={style['searchbar__item']} key={index}>
              {item.name} {item.continent}
            </div>
          );
        }

        return null;
      }),
    [searchInput]
  );

  return (
    <div className={style.searchbar}>
      <input
        className={style['searchbar__input']}
        type='text'
        placeholder='search..'
        onChange={handleSearch}
        value={searchInput}
        onBlur={props.onBlur}
        ref={searchRef}
      />
      {searchInput.length > 0 && (
        <div className={style['searchbar__items']}>{searchItem}</div>
      )}
    </div>
  );
};

export default SearchBar;
