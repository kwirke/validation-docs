import React, {useState} from 'react';
import styled from 'styled-components';
import {flip, prop, includes, pipe} from 'ramda';
import { eerieBlack, blackCoral, platinum } from '../Style/Colors';
import { mediaLaptop } from '../Style/MediaQueries';
import { apiData } from '../ApiData';

const Wrapper = styled.div`
    min-width: 333px;
    height: 100%;
    overflow-y: scroll;
    background-color: ${eerieBlack};
    border-right: 5px solid ${blackCoral};
    color: ${platinum};
    ${mediaLaptop} {
        display: ${props => (props.isOpen ? 'initial' : 'none')};
        width: 100%;
    }
`;

const Method = ({name}) => (
    <li>
        <a>
            {name}
        </a>
    </li>
)

const Methods = ({names}) => (
    <ul>
        {names.map(name => (
            <Method name={name}/>
        ))}
    </ul>
)

const Section = ({ section, textFilter }) => {
    const methods = section.methods.filter(
        name => name.includes(textFilter)
    )
    return (
    <>
        <a>{section.name}</a>
        <Methods names={methods} />
    </>
)};

const Search = ({value, onChange}) => (
    <div>
        <input
            type="text"
            onChange={ev => onChange(ev.target.value)}
            value={value}
        />
    </div>
)

export const Sidebar = ({ isOpen }) => {
    const [searchText, onChange] = useState('')
    return (
    <Wrapper isOpen={isOpen}>
        <Search value={searchText} onChange={onChange}/>
        {apiData.sections.map(section => (
            <Section section={section} textFilter={searchText}/>
        ))}
    </Wrapper>
)};
