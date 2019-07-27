import React from 'react'
import styled from 'styled-components'
import {darkGunmetal, platinum, independence} from '../Style/Colors'
import {Item} from './Item'

const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${darkGunmetal};
    height: 54px;
`;

const bottomMargin = '10px'

const Title = styled.h1`
    display: inline-block;
    color: ${platinum};
    max-height: 38px;
    heigth: 38px;
    margin: 6px 25px ${bottomMargin} 25px;
`;

const Version = styled.h2`
    display: inline-block;
    align-self: flex-end;
    color: ${platinum};
    margin: 0 20px ${bottomMargin} 10px;
    font-size: 18px;
    font-weight: lighter;
`;

const Separator = styled.div`
    width: 2px;
    height: 40px;
    background-color: ${independence};
`;

const NavbarRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Navbar = () => (
    <NavbarWrapper>
        <a href="/">
            <Title>Validation</Title>
        </a>
        <Version>v2.1.4</Version>
        <Separator />
        <NavbarRight>
            <Item to="https://github.com/kwirke/validation">Github</Item>
            <Item to="https://npmjs.com/package/@rexform/validation">npm</Item>
            <Item to="https://dev.to/kwirke/javascript-composable-decoders-with-validation-1ldh">
                Article
            </Item>
        </NavbarRight>
    </NavbarWrapper>
);
