import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow-top.svg';

const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = [
    { name: 'популярности (вниз)', sort: 'rating' },
    { name: 'популярности (вверх)', sort: '-rating' },
    { name: 'цене (вниз)', sort: 'price' },
    { name: 'цене (вверх)', sort: '-price' },
    { name: 'алфавиту (вниз)', sort: 'title' },
    { name: 'алфавиту (вверх)', sort: '-title' },
  ];
  // const sortName = list[value].name;

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className='sort'>
      <div className='sort__label'>
        <Arrow />

        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className='sort__popup'>
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sort === obj.sort ? 'active' : ''}
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
