import { useState } from 'react';
import React from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow-top.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import { useEffect } from 'react';

type SortItem = {
  name: string;
  sortProperty: string;
};

const list: SortItem[] = [
  { name: 'популярности (вниз)', sortProperty: 'rating' },
  { name: 'популярности (вверх)', sortProperty: '-rating' },
  { name: 'цене (вниз)', sortProperty: 'price' },
  { name: 'цене (вверх)', sortProperty: '-price' },
  { name: 'алфавиту (вниз)', sortProperty: 'title' },
  { name: 'алфавиту (вверх)', sortProperty: '-title' },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event);

      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      ref={sortRef}
      className='sort'
    >
      <div className='sort__label'>
        <Arrow />

        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className='sort__popup'>
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
