import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const NavWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 90px;
  max-width: 1920px;
  border-bottom: 2px solid #f7f7f7;
  margin-bottom: 50px;
  background-color: transparent;
`

const NavMain = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: end;
  max-width: 1250px;
  height: 90px;
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
    background: orangered;
  }
  :hover {
    color: white;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
  :focus {
    border: 3px dotted red;
  }
`

const LogoWrapper = styled(Link)`
  display: flex;
  width: 236px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 3px dotted #f7f7f7;
  border-radius: 10px;
  text-decoration: none;
`

class Navigation extends Component {
  render() {
    return (
      <NavWrapper>
        <NavMain>
          <LogoWrapper to="/">
            <span>LOGO</span>
          </LogoWrapper>
          <NavButton to="/about">Firma</NavButton>
          <NavButton to="/blog">Blog</NavButton>
          <NavButton to="/services">Usługi</NavButton>
          <NavButton to="/contact">Kontakt</NavButton>
          <NavButton to="/portfolio">Portfolio</NavButton>
          <NavButton to="/search">Wyszukiwanie</NavButton>
          <NavButton to="/login">Logowanie</NavButton>
        </NavMain>
      </NavWrapper>
    )
  }
}

export default Navigation
