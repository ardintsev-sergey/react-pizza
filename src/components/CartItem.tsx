import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';
import { ReactComponent as CartPlus } from '../assets/img/cartPlus.svg';
import { ReactComponent as CartMinus } from '../assets/img/cartMinus.svg';
import { ReactComponent as CartClear } from '../assets/img/cartClear.svg';

type CartItemProps = {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  image: string;
};

const CartItem: React.FC<CartItemProps> = ({ id, title, type, size, price, count, image }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Вы хотите удалить товар?')) dispatch(removeItem(id));
  };

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img
          className='pizza-block__image'
          src={image}
          alt='Pizza'
        />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          onClick={onClickMinus}
          className='button button--outline button--circle cart__item-count-minus'
        >
          <CartMinus />
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          className='button button--outline button--circle cart__item-count-plus'
        >
          <CartPlus />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{price * count} ₽</b>
      </div>
      <div
        onClick={onClickRemove}
        className='cart__item-remove'
      >
        <div className='button button--outline button--circle'>
          <CartClear />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
