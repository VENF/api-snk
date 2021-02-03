import React from 'react';
import { Container, ContainerSideBar, ContainerPages } from './style';
import SideBar from '../SideBar/index';
const Layout = ({ children }) => {
  return (
    <Container>
      <ContainerSideBar>
        <SideBar />
      </ContainerSideBar>
      <ContainerPages>{children}</ContainerPages>
    </Container>
  );
};

export default Layout;
