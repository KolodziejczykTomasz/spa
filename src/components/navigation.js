import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const BackgroudDark = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`
const NavMain = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: end;
  max-width: 1250px;
  height: 90px;
`

const NavWrapper = styled.div`
  display: flex;
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 109px;
  max-width: 1920px;
  border-bottom: 2px solid #f7f7f7;
  margin-bottom: 50px;
  background-color: transparent;
  z-index: 9999;
  @media (max-width: 768px) {
    background-color: #000;
    color: #fff;
    justify-content: flex-start;  
    ${NavMain} {
      flex-direction: column;
      height: auto;     
    }
  }
`

const NavButton = styled(Link)`
  padding: 30px 30px 25px 30px;
  color: white;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-right: 10px;
  border: 3px dotted transparent;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  :after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    left: 0%;
    bottom: 0;
    height: 4px;
    background: #c23b37;
  }
  :hover {
    color: white;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
  :focus {
    border: 3px dotted #c23b37;
  }
`

const LogoWrapper = styled(Link)`
  display: flex;
  width: 360px;
  height: 98%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dotted #f7f7f7;
  border-radius: 10px;
  text-decoration: none;
  font-size: 25px;
  color: white;
`

class Navigation extends Component {
  render() {
    return (
      <NavWrapper>
        <BackgroudDark></BackgroudDark>
        <NavMain>
          <LogoWrapper to="/">
            <div>extranet </div>
            <div>internet creator</div>
          </LogoWrapper>
          <NavButton to="/">Firma</NavButton>
          <NavButton to="/">Blog</NavButton>
          <NavButton to="/">Usługi</NavButton>
          <NavButton to="/">Kontakt</NavButton>
          <NavButton to="/">Portfolio</NavButton>
          <NavButton to="/">Wyszukiwanie</NavButton>
          <NavButton to="/">Logowanie</NavButton>
        </NavMain>
      </NavWrapper>
    )
  }
}

export default Navigation
