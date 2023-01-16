import React, { useContext } from 'react';

import { ReactComponent as SearchSvg } from '../../assets/img/search.svg';
import { ReactComponent as ClearSvg } from '../../assets/img/clear.svg';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className={styles.root}>
      <SearchSvg className={styles.icon} />
      <input
        className={styles.input}
        placeholder='Поиск пиццы'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <ClearSvg
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
