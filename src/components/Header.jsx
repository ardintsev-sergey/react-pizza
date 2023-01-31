import { Link } from 'react-router-dom';
import logoImg from '../assets/img/pizza-logo.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';
import Search from './Search';
import { useSelector } from 'react-redux';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cartReducer);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img
              width='38'
              src={logoImg}
              alt='Pizza logo'
            />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className='header__cart'>
          <Link
            to='/cart'
            className='button button--cart'
          >
            <span>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <CartIcon />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
