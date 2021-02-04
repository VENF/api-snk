import React,{ useState } from 'react';
import { Container, ContainerSideBar, ContainerPages } from './style';
import SideBar from '../SideBar/index';
const Layout = ({ children }) => {
  const [expand, setExpand] = useState(false)
  const handlerLayout = (value) => setExpand(value)
  return (
    <Container exp={expand}>
      <ContainerSideBar exp={expand}>
        <SideBar setLayout={handlerLayout} />
      </ContainerSideBar>
      <ContainerPages>{children}</ContainerPages>
    </Container>
  );
};

export default Layout;
