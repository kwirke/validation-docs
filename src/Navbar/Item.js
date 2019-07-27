import React from 'react';
import styled from 'styled-components';
import { platinum, gunmetal } from '../Style/Colors';

const ItemButton = styled.a`
    display: flex;
    align-items: center;
    color: ${platinum};
    padding: 0 15px;
    cursor: pointer;
    height: 100%;
    font-size: 20px;
    text-decoration: none;
    :hover {
        background-color: ${gunmetal};
    }
`;

export const Item = ({ to, children }) => (
    <ItemButton href={to} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
    </ItemButton>
);
