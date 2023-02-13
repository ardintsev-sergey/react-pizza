import React, { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { ReactComponent as SearchSvg } from '../../assets/img/search.svg';
import { ReactComponent as ClearSvg } from '../../assets/img/clear.svg';
import styles from './Search.module.scss';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = (event: React.MouseEvent<SVGSVGElement>) => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target?.value);
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
