import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

import useInicialState from '../hooks/useInicialState';
const API = 'http://localhost:3000/initalState';

const App = () => {
  const inicialState = useInicialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {inicialState.mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencia'>
        <Carousel>
          {inicialState.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzy'>
        <Carousel>
          {inicialState.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer></Footer>
    </div>
  );
};

export default App;
