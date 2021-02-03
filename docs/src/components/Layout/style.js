import styled from '@emotion/styled';
import { dark } from '../../styles/global';
export const Container = styled.div({
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '.4fr 2fr',
  '@media (max-width: 700px)': {
    gridTemplateColumns: '1fr' 
  }
});

export const ContainerSideBar = styled.div({
  height: '100%',
  position: 'relative',
  background: dark,
  '@media (max-width: 700px)': {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '150px'
  }
});

export const ContainerPages = styled.div({
  height: '100%',
  background: dark
});
