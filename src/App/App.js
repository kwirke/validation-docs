import React from 'react'
import styled from 'styled-components'
import './App.css'
import {Navbar} from '../Navbar/Navbar'
import { deepKoamaru, eerieBlack } from '../Style/Colors';

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
    width: 333px;
    height: 100%;
    background-color: ${eerieBlack};
`

const Page = styled.div`
    width: 100%;
    height: 100%;
    // background-color: ${eerieBlack};
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
