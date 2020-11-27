import React from "react"

import styled from "styled-components"

const MainWrapper = styled.div`
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

const MainWrapperPortfolio = styled.div`
  height: 582px;
  padding: 0 0 75px 0;  
`

const Main = () => (
  <MainWrapper>
    <MainWrapperSection>
      <MainWrapperSectionContent>
        <h1>Filozofia firmy</h1>
        <div>
          Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
          systemy CMS (Content Management System - system zarządzania treścią).
          Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
          utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
          rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
        </div>
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
        <h1>Nasza oferta</h1>
        <div>
          Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
          systemy CMS (Content Management System - system zarządzania treścią).
          Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
          utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
          rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
        </div>
      </MainWrapperOferContent>
    </MainWrapperOfer>
    <MainWrapperPortfolio>Portfolio</MainWrapperPortfolio>
  </MainWrapper>
)

export default Main
