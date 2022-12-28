import { Link } from 'react-router-dom';
import logoImg from '../assets/img/pizza-logo.svg';
import { ReactComponent as CartIcon } from '../assets/img/cart.svg';

const Header = () => {
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
        <div className='header__cart'>
          <Link
            to='/cart'
            className='button button--cart'
          >
            <span>520 ₽</span>
            <div className='button__delimiter'></div>
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
