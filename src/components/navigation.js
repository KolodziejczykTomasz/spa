import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const BackgroudDark = styled.div`
  display: grid;
  position: absolute;
  min-width: 360px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${({ nav }) => (nav ? 1 : 0)};
  @media (min-width: 1299px) {
        opacity: 0;
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none !important;
  cursor: pointer;
  z-index: 5;
  opacity: 0;
  div {
    width: 1.5rem;
    height: 0.2rem;
    background: #fff;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 1300px) {
        opacity: 1;
  }
`

const NavMain = styled.div`
  display: flex;
  flex-direction: ${({ nav }) => (nav ? "column" : "row")};
  align-items: ${({ nav }) => (nav ? "start" : "end")};
  position: ${({ nav }) => (nav ? "absolute" : "static")};
  margin: ${({ nav }) => (nav ? "0 auto" : "0 0")};
  max-width: 1250px;
  height: 90px;
  @media (min-width: 1299px) {
    flex-direction: row;
  }
`

const NavWrapper = styled.div`
  display: flex;
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 110px;
  height: ${({ scrolled }) => (scrolled ? "110px" : "140px")};
  max-width: 1920px;
  border-bottom: 2px solid #f7f7f7;
  margin-bottom: 50px;
  transition: 400ms;
  z-index: 9999;
  @media (min-width: 1299px) {
       justify-content: center;
    background-color: ${({ scrolled }) =>
      scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  }
`

const NavWrapperButton = styled.div`
  display: flex;
  flex-direction: ${({ nav }) => (nav ? "column" : "row")};
  opacity: 1;
  @media (max-width: 1299px) {
        opacity: ${({ nav }) => (nav ? 1 : 0)};
    flex-direction: column;
  }
  @media (min-width: 1299px) {
       display: flex;
    flex-direction: row;
  }
`

const NavButton = styled(Link)`
  padding: 30px 30px 25px 30px;
  color: white;
  font-size: ${({ scrolled }) => (scrolled ? "15px" : "18px")};
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
  height: ${({ scrolled }) => (scrolled ? "98%" : "90%")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dotted #f7f7f7;
  border-radius: 10px;
  text-decoration: none;
  font-size: ${({ scrolled }) => (scrolled ? "25px" : "20px")};
  color: white;
  opacity: 1;
  @media (max-width: 762px) {
        opacity: 0;
  }
`

const Navigation = () => {
  const [nav, showNav] = useState(false)
   const [scrolled, setScrolled] = useState(false)


 useEffect(() => {
   const handleScroll = () => {
     const isScrolled = window.scrollY > 10
     if (isScrolled !== scrolled) {
       setScrolled(!scrolled)
     }
   }

   document.addEventListener("scroll", handleScroll, { passive: true })

   return () => {
     document.removeEventListener("scroll", handleScroll)
   }
 }, [scrolled])
  return (
    <NavWrapper scrolled={scrolled}>
      <BackgroudDark nav={nav} />
      <NavMain nav={nav}>
        <LogoWrapper to="/">
          <div>extranet </div>
          <div>internet creator</div>
        </LogoWrapper>
        <NavWrapperButton nav={nav}>
          <NavButton to="/" scrolled={scrolled}>
            Firma
          </NavButton>
          <NavButton to="/" scrolled={scrolled}>
            Blog
          </NavButton>
          <NavButton to="/" scrolled={scrolled}>
            Usługi
          </NavButton>
          <NavButton to="/" scrolled={scrolled}>
            Kontakt
          </NavButton>
          <NavButton to="/" scrolled={scrolled}>
            Portfolio
          </NavButton>
          <NavButton to="/" scrolled={scrolled}>
            Wyszukiwanie
          </NavButton>
          <NavButton to="/" scrolled={scrolled}>
            Logowanie
          </NavButton>
        </NavWrapperButton>
      </NavMain>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
    </NavWrapper>
  )
}

export default Navigation
