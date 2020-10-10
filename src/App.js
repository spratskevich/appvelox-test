import React from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import ContentArea from './components/ContentArea';

import data from './assets/data.json';
import avatarImg from './assets/images/avatarPhoto.png';

function App() {
  return (
    <>
      <Navigation/>
      <Header avatarImg={avatarImg}/>
      <ContentArea appointmentsDataList={ data.appointmentsDataList }/>
    </>
  );
}

export default App;
