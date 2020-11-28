import React from "react"

import styled from "styled-components"

const MainWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`
const MainWrapperSection = styled.div`
  height: 283px;
  width: 100%;
  margin: 0 auto;
`
const MainWrapperSectionContent = styled.div`
  padding: 50px 0;
  width: 832px;
  margin: 0 auto;
`
const ButtonWrapper = styled.button`
  display: block;
  margin: 50px auto;
  width: auto;
  height: 50px;
  padding: 3px 20px;
  background-color: #c23b37;
  border: none;
`
const ButtonText = styled.span`
  text-transform: uppercase;
  color: white;
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
  height: 356px;
  background-color: black;
  color: white;
`

const MainWrapperOferContent = styled.div`
  width: 832px;
  margin: 0 auto;
  padding: 50px 0 185px;
`

const MainWrapperPortfolioSection = styled.div`
  width: 100%;
`

const MainWrapperPortfolioSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -75px auto 0 auto;
  height: 582px;
  width: 832px;
  padding: 0 0 15px 0;
`

const MainWrapperPortfolioSectionContentItem = styled.div`
  width: 260px;
  height: 560px;
  background-color: grey;
`

const Header = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 400px;
  border-bottom: 3px solid #c23b37;
`

const Main = () => (
  <MainWrapper>
    <MainWrapperSection>
      <MainWrapperSectionContent>
        <Header>Filozofia firmy</Header>
        <div>
          Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
          systemy CMS (Content Management System - system zarządzania treścią).
          Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
          utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
          rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
        </div>
        <ButtonWrapper>
          <ButtonText>dowiedz się więcej</ButtonText>
        </ButtonWrapper>
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
        <div>
          Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
          systemy CMS (Content Management System - system zarządzania treścią).
          Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
          utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
          rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
        </div>
        <ButtonWrapper>
          <ButtonText>Zobacz więcej</ButtonText>
        </ButtonWrapper>
      </MainWrapperOferContent>
    </MainWrapperOfer>
    <MainWrapperPortfolioSection>
      <MainWrapperPortfolioSectionContent>
        <MainWrapperPortfolioSectionContentItem>
          Strony internetowe
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          Poczta elektroniczna
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          Rozwiązania dedykowane
        </MainWrapperPortfolioSectionContentItem>
      </MainWrapperPortfolioSectionContent>
    </MainWrapperPortfolioSection>
  </MainWrapper>
)

export default Main
