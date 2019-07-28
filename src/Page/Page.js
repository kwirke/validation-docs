import React from 'react';
import styled from 'styled-components';
import './Page.css';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atelier-cave-dark.css';
import { apiData } from '../ApiData';
import { darkGunmetal, blackCoral, platinum } from '../Style/Colors';
import { mediaLaptop } from '../Style/MediaQueries';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${darkGunmetal};
    overflow-y: scroll;
    padding: 20px;
    color: ${platinum};
    ${mediaLaptop} {
        display: ${props => (props.isSidebarOpen ? 'none' : 'initial')};
    }
`;

const Type = ({ children, className }) => (
    <Highlight className={`typescript ${className}`}>{children}</Highlight>
);

const TypeBlock = styled(Type)`
    padding: 5px;
    display: inline-block;
    background-color: ${blackCoral};
`;

const Code = ({ text }) => <Highlight className="javascript">{text}</Highlight>;

const Method = ({ name }) => {
    const method = apiData.methods[name] || {};
    const type = method.type;
    const description = method.description || [];
    return (
        <>
            <h3>{name}</h3>
            <TypeBlock>{type}</TypeBlock>
            {description.map(item =>
                typeof item === 'string' ? (
                    <p>{item}</p>
                ) : (
                    <Code text={item.code} />
                ),
            )}
        </>
    );
};

const Section = ({ section }) => (
    <>
        <h2>{section.name}</h2>
        {section.methods.map(methodName => (
            <Method name={methodName} />
        ))}
    </>
);

export const Page = () => (
    <Wrapper>
        {apiData.sections.map(section => (
            <Section section={section} />
        ))}
    </Wrapper>
);
