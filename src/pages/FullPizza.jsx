import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizzaItem() {
      try {
        const { data } = await axios.get(
          'https://637670f781a568fc25fee346.mockapi.io/pizzas/' + id
        );
        setPizza(data);
      } catch (error) {}
    }
    fetchPizzaItem();
  }, []);

  if (!pizza) {
    return 'Загрузка ...';
  }

  return (
    <div className='container'>
      <img
        src={pizza.imageUrl}
        alt=''
      />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem voluptatem quis
        modi quod aut. Dolor sapiente ullam corporis provident nam nisi, tempore iure perferendis
        commodi sequi assumenda cum soluta.
      </p>
    </div>
  );
};

export default FullPizza;
