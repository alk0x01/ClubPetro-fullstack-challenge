import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import InputArea from '../components/InputArea';

const Landing: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <InputArea />
    </>
  );
};

export default Landing;
