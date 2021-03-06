import React, { useState, useEffect, Fragment } from 'react';

import './MainPage.scss';
import FormDataService from '../../services/form.service';

import axios from 'axios';

import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import WhyUs from '../../components/WhyUs/WhyUs';
import Popular from '../../components/Popular/Popular';
import Petition from '../../components/Petition/Petition';
import Faq from '../../components/FAQ/Faq';
import Aside from '../../components/aside/Aside';
import Footer from '../../components/Footer/Footer';

import vectorImg from '../../assets/images/vector.svg';
import circleShapeImg from '../../assets/images/circle.svg';
import blob from '../../assets/images/blob.svg';

const MainPage = () => {
  const [popularPostsState, updatePopular] = useState({ popular: [] });

  useEffect(() => {
    FormDataService.getForm(1, 1).then(response => {
      updatePopular({ popular: response.data });
    });
  }, []);

  return (
    <Fragment>
      <img src={vectorImg} alt="vector" className="shape-main" />
      <img src={circleShapeImg} alt="vector" className="shape-circle" />
      <div className="container">
        <Header />
        <Hero />
        <WhyUs />
        <Popular posts={popularPostsState.popular} />
        <Petition />
        <Faq />
        <Aside />
      </div>
      <Footer />
    </Fragment>
  );
};

export default MainPage;
