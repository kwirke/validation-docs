import React from 'react'
import styled from 'styled-components'
import './App.css'

const gunmetal = '#2d3941'
const darkGunmetal = '#19262e'

const russianViolet = '#3c294f'

const deepKoamaru = '#284464'
const eerieBlack = '#0f1925'

const platinum = '#dee0e2'
const independence = '#4a5863'

const celadonGreen = '#27878e'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${darkGunmetal};
  height: 54px;
`

const Title = styled.h1`
  display: inline-block;
  color: ${platinum};
  max-height: 38px;
  heigth: 38px;
  margin: 8px 25px;
`

const Version = styled.h2`
  display: inline-block;
  align-self: flex-end;
  color: ${platinum};
  margin: 0 20px 8px 10px;
  font-size: 18px;
  font-weight: lighter;
`

const Separator = styled.div`
  width: 2px;
  height: 40px;
  background-color: ${independence};
`

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const ItemButton = styled.a`
  display: flex;
  align-items: center;
  color: ${platinum};
  padding: 0 15px;
  cursor: pointer;
  height: 100%;
  font-size: 20px;
  :hover {
    background-color: ${gunmetal};
  }
`

const Item = ({to, children}) => (
  <ItemButton href={to}>
    {children}
  </ItemButton>
)

export const App = () => (
  <Navbar>
    <Title>Validation</Title>
    <Version>v2.1.4</Version>
    <Separator/>
    <NavbarRight>
      <Item><span>Github</span></Item>
      <Item><span>Article</span></Item>
    </NavbarRight>
  </Navbar>
)
