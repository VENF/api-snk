import styled from '@emotion/styled';
import { grey } from '../../../../styles/global';
import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)({
  color: grey,
  fontSize: '100%',
  fontFamily: 'Montserrat',
  margin: '.4em 0em',
  marginLeft: '10px'
});

export const Container = styled.div(({ press }) => ({
  display: 'flex',
  alignItems: 'center',
  svg: {
    g: {
      stroke: `${press ? '#FFF' : grey}`
    }
  },
  a: {
    color: `${press ? '#FFF' : grey}`
  }
}));
