import React, { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { ReactComponent as SearchSvg } from '../../assets/img/search.svg';
import { ReactComponent as ClearSvg } from '../../assets/img/clear.svg';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

const Search = () => {
  const [value, setValue] = useState('');
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <SearchSvg className={styles.icon} />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder='Поиск пиццы'
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <ClearSvg
          onClick={onClickClear}
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
