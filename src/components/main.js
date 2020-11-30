import React from "react"

import styled from "styled-components"

const MainWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`
const MainWrapperSection = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
`

const MainWrapperSectionContent = styled.div`
  padding: 50px 0;
  width: 80%;
  margin: 0 auto;
  background: none;
`
const MainWrapperSectionContentText = styled.div`
  font-size: 25px;
  font-weight: 400;
  line-height: 29px;
  font-family: Lato, sans-serif;
  color: #717171;
`

const ButtonWrapper = styled.button`
  display: block;
  margin: 50px auto 0 auto;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 50px;
  padding: 1px 20px;
  border: none;
  text-transform: uppercase;
  color: white;
  font-family: "Lovelo Black";
  font-size: 15px;
  background: none;
  z-index: 1;
  :after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c23b37;
    color: white;
    font-family: "Lovelo Black";
    font-size: 15px;
    line-height: 40;
    z-index: -1;
    transition: top 0.3s ease-in-out;
  }
  :hover:after {
    left: 0;
    bottom: auto;
    top: 90%;
    color: black;
  }
  :focus {
    border: 3px dotted #c23b37;
  }
`
const ButtonWrapperContent = styled.button`
  display: block;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 50px;
  padding: 1px 20px;
  border: none;
  font-family: "Lovelo Black";
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  background-color: transparent;
  z-index: 1;
  :after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c23b37;
    color: black;
    font-family: "Lovelo Black";
    font-size: 15px;
    line-height: 40;
    z-index: -1;
    transition: top 0.3s ease-in-out;
  }
  :hover {
    color: black;
  }
  :hover:after {
    left: 0;
    bottom: auto;
    top: 90%;
  }
  :focus {
    border: 3px dotted #c23b37;
  }
`

const MainWrapperProject = styled.div``

const MainWrapperProjectSection = styled.div`
  display: grid;
  grid-template-columns: 0.65fr 0.35fr;
  height: 980px;
  width: 100%;
`
const MainWrapperProjectSectionLeft = styled.div`
  grid: column;
  height: 100%;
  background-color: blue;
`
const MainWrapperProjectSectionRight = styled.div`
  grid: row;
  grid-template-rows: 0.5fr 0.5fr;
`
const MainWrapperProjectSectionRightTop = styled.div`
  background-color: green;
  height: 50%;
`
const MainWrapperProjectSectionRightBottom = styled.div`
  background-color: brown;
  height: 50%;
`

const MainWrapperOfer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
`

const MainWrapperOferContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0 185px;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  font-family: Lato, sans-serif;
`

const MainWrapperPortfolioSection = styled.div`
  width: 100%;
`

const MainWrapperPortfolioSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -75px auto 0 auto;
  height: 582px;
  width: 70%;
  padding: 0 0 15px 0;
`
const MainWrapperPortfolioSectionContentItemHeader = styled.div`
  font-size: 35px;
  line-height: 53px;
  color: #000;
  padding-left: 5px;
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
    color: #000;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
  :focus {
    border: 3px dotted #c23b37;
  }
`
const MainWrapperPortfolioSectionContentItemFooter = styled.div`
  display: flex;
  height: 80%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 5px;
  position: relative;
  opacity: 0;
`
const MainWrapperPortfolioSectionContentItem = styled.button`
  width: 310px;
  height: 560px;
  border: 3px dotted transparent;
  transition: 0.3s;
  font-size: 35px;
  font-family: "Lovelo Black";
  line-height: 42px;
  text-align: left;
  :focus {
    border: 3px dotted #c23b37;
  }
`

const Header = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto 25px auto;
  width: 200px;
  border-bottom: 3px solid #c23b37;
  font-size: 35px;
  font-family: "Lovelo Black";
  line-height: 42px;
`

const Main = () => (
  <MainWrapper>
    <MainWrapperSection>
      <MainWrapperSectionContent>
        <Header>Filozofia firmy</Header>
        <MainWrapperSectionContentText>
          Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
          systemy CMS (Content Management System - system zarządzania treścią).
          Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
          utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
          rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
        </MainWrapperSectionContentText>
        <ButtonWrapperContent>dowiedz się więcej</ButtonWrapperContent>
      </MainWrapperSectionContent>
    </MainWrapperSection>
    <MainWrapperProject>
      <MainWrapperProjectSection>
        <MainWrapperProjectSectionLeft>1</MainWrapperProjectSectionLeft>
        <MainWrapperProjectSectionRight>
          <MainWrapperProjectSectionRightTop>
            2a
          </MainWrapperProjectSectionRightTop>
          <MainWrapperProjectSectionRightBottom>
            2b
          </MainWrapperProjectSectionRightBottom>
        </MainWrapperProjectSectionRight>
      </MainWrapperProjectSection>
    </MainWrapperProject>
    <MainWrapperOfer>
      <MainWrapperOferContent>
        <Header>Nasza oferta</Header>
        <div style={{ lineHeight: 1.6 }}>
          Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
          systemy CMS (Content Management System - system zarządzania treścią).
          Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
          utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
          rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
        </div>
        <ButtonWrapper>Zobacz więcej</ButtonWrapper>
      </MainWrapperOferContent>
    </MainWrapperOfer>
    <MainWrapperPortfolioSection>
      <MainWrapperPortfolioSectionContent>
        <MainWrapperPortfolioSectionContentItem>
          <MainWrapperPortfolioSectionContentItemHeader>
            Strony internetowe
          </MainWrapperPortfolioSectionContentItemHeader>
          <MainWrapperPortfolioSectionContentItemFooter>
            Dowiedz się więcej
          </MainWrapperPortfolioSectionContentItemFooter>
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          <MainWrapperPortfolioSectionContentItemHeader>
            Poczta elektroniczna
          </MainWrapperPortfolioSectionContentItemHeader>
          <MainWrapperPortfolioSectionContentItemFooter>
            Dowiedz się więcej
          </MainWrapperPortfolioSectionContentItemFooter>
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          <MainWrapperPortfolioSectionContentItemHeader>
            Rozwiązania dedykowane
          </MainWrapperPortfolioSectionContentItemHeader>
          <MainWrapperPortfolioSectionContentItemFooter>
            Dowiedz się więcej
          </MainWrapperPortfolioSectionContentItemFooter>
        </MainWrapperPortfolioSectionContentItem>
      </MainWrapperPortfolioSectionContent>
    </MainWrapperPortfolioSection>
  </MainWrapper>
)

export default Main
