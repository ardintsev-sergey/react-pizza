import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import CartEmpty from './CartEmpty';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';
import { ReactComponent as ClearIcon } from '../assets/img/clearCartIcon.svg';
import { ReactComponent as BackIcon } from '../assets/img/back.svg';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      // @ts-ignore
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className='content'>
      <div className='container container--cart'>
        <div className='cart'>
          <div className='cart__top'>
            <h2 className='content__title'>
              <CartIcon />
              Корзина
            </h2>
            <div
              onClick={onClickClear}
              className='cart__clear'
            >
              <ClearIcon />

              <span>Очистить корзину</span>
            </div>
          </div>
          <div className='content__items'>
            {items.map((item: any) => (
              <CartItem
                key={item.id}
                {...item}
              />
            ))}
          </div>
          <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>
                {' '}
                Всего пицц: <b>{totalCount} шт.</b>{' '}
              </span>
              <span>
                {' '}
                Сумма заказа: <b>{totalPrice} ₽</b>{' '}
              </span>
            </div>
            <div className='cart__bottom-buttons'>
              <Link
                to='/'
                className='button button--outline button--add go-back-btn'
              >
                <BackIcon />

                <span>Вернуться назад</span>
              </Link>
              <div className='button pay-btn'>
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
