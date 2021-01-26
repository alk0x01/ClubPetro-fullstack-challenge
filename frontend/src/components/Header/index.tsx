import React from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Lugares" />
    </Container>
  );
};

export default Header;
