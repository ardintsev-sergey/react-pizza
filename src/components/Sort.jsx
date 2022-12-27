import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/img/arrow-top.svg';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ['популярности', 'цене', 'алфавиту'];
  const sortName = list[selected];

  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  };

  return (
    <div className='sort'>
      <div className='sort__label'>
        <Arrow />

        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortName}</span>
      </div>
      {open && (
        <div className='sort__popup'>
          <ul>
            {list.map((name, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(i)}
                className={selected === i ? 'active' : ''}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
