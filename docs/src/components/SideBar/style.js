import styled from '@emotion/styled';
import { darkLigth } from '../../styles/global';

export const Container = styled.div(({ open }) => ({
  height: '100%',
  background: darkLigth,
  boxShadow: '7px 0px 15px rgba(0, 0, 0, 0.248)',
  position: 'absolute',
  top: '0px',
  left: `${open ? '0px' : '-300px'}`,
  width: '100%',
  transition: 'all ease .3s',
  padding: '10px',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  zIndex: '10000'
}));

export const BtnSide = styled.button(({ open }) => ({
  position: 'absolute',
  transition: 'all ease .4s',
  top: '10px',
  left: `${open ? '80%' : '310px'}`,
  background: 'transparent',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transform: `${open ? 'rotate(90deg)': 'rotate(-90deg)'}`
}));

export const Logo = styled.div({
  marginTop: '2.3em'
})
