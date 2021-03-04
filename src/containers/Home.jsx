import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

// import useInicialState from '../hooks/useInicialState';
// const API = 'http://localhost:3000/initalState';

const Home = (props) => {
  // const inicialState = useInicialState(API);

  /* return inicialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : */
  const { myList, trends, originals } = props;
  // console.log('props ==>', props);
  return (
    <>
      <Header />
      <Search isHome />
      {myList?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList?.map((item, index) => (
              // <CarouselItem key={index} {...item} />
              /* por defecto isList = true para falso isList={false} */
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencia'>
        <Carousel>
          {trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzy'>
        <Carousel>
          {originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
/* esto es un escucha que saca los datos store es decir los que necesita */
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
