import React, { useState } from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { Body, Layout } from './App.styles';
import { Page } from '../Page/Page';

export const App = () => {
    const [isSidebarOpen, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!isSidebarOpen);
    return (
        <Layout>
            <Navbar
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
            />
            <Body>
                <Sidebar isOpen={isSidebarOpen} />
                <Page isSidebarOpen={isSidebarOpen} />
            </Body>
        </Layout>
    );
};
