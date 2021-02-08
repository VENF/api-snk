import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import IconChevron from '../../../Icons/IconChevron';
import IconCode from '../../../Icons/IconCode';
import { grey } from '../../../../styles/global';
import { SubLinks, SubLink, Container, SubContainer, Mark, Text } from './style';

const SubLinkC = ({ text, sub }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <Container>
      <SubLinks press={open} onClick={() => (open ? setOpen(false) : setOpen(true))}>
        <IconCode width="25" heigth="25" stroke={open ? '#FFF' : grey} />
        <span> {text} </span>
        <IconChevron width="25" heigth="25" stroke={open ? '#FFF' : grey} />
      </SubLinks>
      {open && (
        <SubContainer>
          {sub.map(({ path, text }, i) => (
            <SubLink key={i} to={path}>
              <Mark active={pathname === path ? 'true' : 'false'}></Mark>
              <Text active={pathname === path ? 'true' : 'false'}> {text} </Text>
            </SubLink>
          ))}
        </SubContainer>
      )}
    </Container>
  );
};

export default SubLinkC;
