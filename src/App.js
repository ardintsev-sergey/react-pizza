import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import React, { useEffect, useState } from 'react';
import PizzaBlock from './components/PizzaBlock';

import pizzas from './assets/pizzas.json';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://637670f781a568fc25fee346.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                {...pizza}
                image={pizza.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
