import React from 'react';
import styled from 'styled-components';
import {
    platinum,
    independence,
    gunmetal,
} from '../Style/Colors';
import { Item } from './Item';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';
import { npm } from './npmIcon';
import { mediaTablet, mediaMobile } from '../Style/MediaQueries';
import { Hamburger } from './Hamburger';

const bottomMargin = '10px';

const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${gunmetal};
    height: 54px;
`;
const Title = styled.h1`
    display: inline-block;
    color: ${platinum};
    max-height: 38px;
    heigth: 38px;
    margin: 6px 25px ${bottomMargin} 25px;
    ${mediaTablet} {
        margin: 6px 5px ${bottomMargin} 5px;
    }
`;
const Version = styled.h2`
    display: inline-block;
    align-self: flex-end;
    color: ${platinum};
    margin: 0 20px ${bottomMargin} 0;
    font-size: 18px;
    font-weight: lighter;
    ${mediaMobile} {
        display: none;
    }
`;
const Separator = styled.div`
    width: 2px;
    height: 40px;
    background-color: ${independence};
`;
const NavbarCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${mediaTablet} {
        & > * {
            display: none;
        }
    }
`;
const NavbarRight = styled.div`
    display: flex;
    height: 100%;
    width: 250px;
`;
const StyledItem = styled(Item)`
    display: flex;
    justify-content: center;
    width: 45px;
`;

const IconLink = ({ icon, alt, to }) => (
    <StyledItem to={to}>
        <Icon icon={icon} size={30} title={alt} />
    </StyledItem>
);

export const Navbar = () => (
    <NavbarWrapper>
        <Hamburger />
        <a href="/">
            <Title>Validation</Title>
        </a>
        <Version tabIndex={0}>v2.1.4</Version>
        <Separator />
        <NavbarCenter>
            <Item to="https://dev.to/kwirke/javascript-composable-decoders-with-validation-1ldh">
                Article
            </Item>
            <Item to="https://runkit.com/kwirke/validation-decoder">
                Try it
            </Item>
        </NavbarCenter>
        <NavbarRight>
            <IconLink
                to="https://npmjs.com/package/@rexform/validation"
                icon={npm}
                alt="NPM"
            />
            <IconLink
                to="https://github.com/kwirke/validation"
                icon={github}
                alt="Github"
            />
        </NavbarRight>
    </NavbarWrapper>
);
