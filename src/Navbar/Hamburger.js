import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { close } from 'react-icons-kit/fa/close';
import { navicon } from 'react-icons-kit/fa/navicon';
import { platinum, blackCoral } from '../Style/Colors';
import { mediaLaptop } from '../Style/MediaQueries';

const LaptopButton = styled.div`
    height: 100%;
    padding: 0 15px;
    align-items: center;
    color: ${platinum};
    cursor: pointer;
    :hover {
        background-color: ${blackCoral};
    }
    display: none;
    ${mediaLaptop} {
        display: inline-flex;
    }
`;

export const Hamburger = ({ onClick, isOpen }) => (
    <LaptopButton onClick={onClick}>
        <Icon size={30} icon={isOpen ? close : navicon} />
    </LaptopButton>
);
