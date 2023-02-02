import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow-top.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import { useEffect } from 'react';

const list = [
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
  const sortRef = useRef();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event);
      let path = event.composedPath().includes(sortRef.current);
      if (!path) {
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
