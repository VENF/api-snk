import React from 'react';
import { useLocation } from 'react-router-dom';
/*styles*/
import { LinkTo, Container } from './style';

const Item = ({ text, path, icon }) => {
  const { pathname } = useLocation();
  return (
    <Container press={pathname === path ? true: false} >
      <div> {icon} </div>
      <LinkTo to={path}>{text}</LinkTo>
    </Container>
  );
};

export default Item;
