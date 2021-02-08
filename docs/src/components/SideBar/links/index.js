import React from 'react';
/*Components*/
import Link from './link/index';
import SubLink from './subLink/index';
/*Icons*/
import IconHome from '../../Icons/IconHome';
import IconBook from '../../Icons/IconBookMark';
/*Styles*/
import { Container } from './style';
import { grey } from '../../../styles/global';

const Links = () => {
  const routes = [
    {
      text: 'Home',
      path: '/',
      icon: <IconHome width="25" heigth="25" stroke={grey} />,
      sub: undefined
    },
    {
      text: 'Documentation',
      path: '/documentation',
      sub: [
        { text: 'Information', path: '/information' },
        { text: 'Resource Lists', path: '/resource-lists' },
        { text: 'Fair Use Policy', path: '/fair-use-policy' }
      ]
    },
    {
      text: 'About',
      path: '/about',
      icon: <IconBook width="25" heigth="25" stroke={grey} />,
      sub: undefined
    }
  ];
  return (
    <Container>
      {routes.map(({ text, path, icon, sub }, i) =>
        sub === undefined ? (
          <Link text={text} path={path} icon={icon} key={i}/>
        ) : (
          <SubLink key={i} text={text} sub={sub} />
        )
      )}
    </Container>
  );
};

export default Links;
