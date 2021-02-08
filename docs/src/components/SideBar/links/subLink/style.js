import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { grey, primary } from '../../../../styles/global';

export const Container = styled.div({
  display: 'flex',
  flexFlow: 'column'
});

export const SubLinks = styled.button(({ press }) => ({
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: `${press ? '#FFF':grey}`,
  display: 'flex',
  fontSize: '100%',
  fontFamily: 'Montserrat',
  alignItems: 'center',
  outline: 'none',
  span: {
    margin: '10px 5px'
  }
}));

export const SubContainer = styled.div({
  marginLeft: '10px',
  transition: 'all ease .3s'
});

export const SubLink = styled(Link)({
  color: grey,
  margin: '5px 0px',
  position: 'relative',
  p: {
    marginLeft: '15px'
  }
});

export const Text = styled.span(({ active }) => ({
  transition: 'all ease .3s',
  marginLeft: '15px',
  color: `${active === 'true' ? primary : grey}`
}));

export const Mark = styled.span(({ active }) => ({
  width: `${active === 'true' ? '10px' : '0px'}`,
  height: '100%',
  background: `${active === 'true' ? primary : 'transparent'}`,
  position: 'absolute',
  top: '0px',
  left: '0px',
  borderRadius: '0px 6px 6px 0px',
  transition: 'all ease .3s',
  boxShadow: `0px 4px 5px rgba(26, 91, 255, 0.582)`,
}));
