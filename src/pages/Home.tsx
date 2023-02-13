import React, { useContext, useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import qs from 'qs';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const sortType = sort.sortProperty;

  const onClickCategory = (id: number) => {
    console.log(id);
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  // useEffect(() => {
  const getPizzas = async () => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      // @ts-ignore
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        categoryId: categoryId > 0 ? categoryId : null,
      };

      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`?${queryString}`);
    }

    if (!window.location.search) {
      getPizzas();
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((pizza) => (
    <Link
      key={pizza.id}
      to={`/pizza/${pizza.id}`}
    >
      <PizzaBlock
        {...pizza}
        image={pizza.imageUrl}
      />
    </Link>
  ));

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onClickCategory={onClickCategory}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      {status === 'error' ? (
        <div className='content__error'>
          <h2>Произошла ошибка 😕</h2>
          <p>Не удалось получить данные.</p>
        </div>
      ) : (
        <div className='content__items'>{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default Home;
