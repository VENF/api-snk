import React, { useState } from 'react'
import { Container, BtnSide, Logo } from './style';
import IconChevron from '../Icons/IconChevron';
import IconSnk from '../Icons/IconSnk';
const SideBar = () => {
    const [bar, setBar] = useState(true);
    const handlerBar = () => bar ? setBar(false): setBar(true);
    return (
        <Container open={bar}>
            <BtnSide onClick={handlerBar} open={bar}>
                <IconChevron width="25" heigth="25" stroke="#FFF" />
            </BtnSide>
            <Logo>
                <IconSnk width="100%" heigth="44" color="#FFF" />
            </Logo>
        </Container>
    )
}

export default SideBar
