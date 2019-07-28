import React from 'react'
import styled from 'styled-components'
import './App.css'
import {Navbar} from '../Navbar/Navbar'
import { deepKoamaru, eerieBlack, gunmetal, darkGunmetal } from '../Style/Colors';
import { mediaLaptop } from '../Style/MediaQueries';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const Body = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const Sidebar = styled.div`
    min-width: 333px;
    height: 100%;
    background-color: ${eerieBlack};
    ${mediaLaptop} {
        display: none;
    }
`

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${darkGunmetal};
`

export const App = () => (
    <Layout>
        <Navbar/>
        <Body>
            <Sidebar/>
            <Page/>
        </Body>
    </Layout>
)
