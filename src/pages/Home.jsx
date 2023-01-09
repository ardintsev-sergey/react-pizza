import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://637670f781a568fc25fee346.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {/* {[...new Array(6)].map((_, index) => (
      <Skeleton key={index} />
    ))} */}
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                {...pizza}
                image={pizza.imageUrl}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
