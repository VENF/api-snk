import styled from '@emotion/styled';
import { dark } from '../../styles/global';
export const Container = styled.div(({ exp }) => ({
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: `${exp ? '1fr' : '.4fr 2fr'}`,
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr'
  }
}));

export const ContainerSideBar = styled.div(({ exp }) => ({
  height: '100%',
  background: dark,
  position: `${exp ? 'absolute' : 'relative'}`,
  '@media (max-width: 900px)': {
    position: 'absolute !important',
    background: 'transparent',
    width: '250px'
  }
}));

export const ContainerPages = styled.div({
  height: '100%',
  background: dark,
  paddingTop: '2.5em'
});
