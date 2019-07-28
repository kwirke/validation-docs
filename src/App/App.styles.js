import styled from 'styled-components';

export const navbarHeight = '54px'

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;
export const Body = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    top: ${navbarHeight};
    height: calc(100% - ${navbarHeight});
    width: 100%;
`;
