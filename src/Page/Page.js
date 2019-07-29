import React from 'react';
import styled from 'styled-components';
import './Page.css';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atelier-cave-dark.css';
import { apiData } from '../ApiData';
import {darkGunmetal, blackCoral, platinum, independence, gunmetal, russianViolet, celadonGreen, illuminatingEmerald, naviPurple, slateGray} from '../Style/Colors'
import { mediaLaptop } from '../Style/MediaQueries';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${darkGunmetal};
    overflow-y: scroll;
    padding: 0 20px 20px 20px;
    color: ${platinum};
    ${mediaLaptop} {
        display: ${props => (props.isSidebarOpen ? 'none' : 'initial')};
    }
`;

const Type = ({ children, className }) => (
    <Highlight className={`typescript ${className}`}>{children}</Highlight>
);

const MethodName = styled.h3`
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 15px;
`;
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
            <MethodName>{name}</MethodName>
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

const SectionName = styled.h2`
    text-align: center;
    border-bottom: 2px solid ${slateGray};
    padding-bottom: 15px;
    margin-top: 60px;
    font-size: 30px;
    color: ${slateGray};
`

const Section = ({ section }) => (
    <>
        <SectionName>{section.name}</SectionName>
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
