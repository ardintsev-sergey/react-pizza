import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow-top.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

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
  const sort = useSelector((state) => state.filterReducer.sort);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className='sort'>
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
