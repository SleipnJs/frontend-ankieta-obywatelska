import React, { useState, useEffect } from 'react';

import './MainPage.scss';
import FormDataService from '../../services/form.service'

import axios from 'axios';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import WhyUs from '../../components/WhyUs/WhyUs';
import Popular from '../../components/Popular/Popular';
import Aside from '../../components/aside/Aside';
import Footer from '../../components/Footer/Footer';

import vectorImg from '../../assets/images/vector.svg';
import circleShapeImg from '../../assets/images/circle.svg';

const MainPage = () => {
  const [popularPostsState, updatePopular] = useState({ popular: [] });

  useEffect(() => {
      FormDataService.getForm(1,1).then(response => {
      updatePopular({ popular: response.data });
    });
  }, []);

  return (
    <div className="App">
      <img src={vectorImg} alt="vector" className="shape-main" />
      <div className="container">
        <Header />
        <Hero />
        <WhyUs />
        <Popular posts={popularPostsState.popular} />
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
