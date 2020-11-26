import React from "react"

import styled from "styled-components"

const MainWrapper = styled.div` 
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`
const MainWrapperContent = styled.div`
  height: 283px;
  padding: 50px 0;
  width: 832px;
  margin: 0 auto;
`
const MainWrapperProject = styled.div`
  height: 980px;
  background-color: grey;
`
const MainWrapperOfer = styled.div`
  height: 356px;
  padding: 50px 0 185px;
  background-color: orangered;
`
const MainWrapperPortfolio = styled.div`
  height: 582px;
  padding: 0 0 75px 0;
  background-color: black;
`

const Main = () => (
  <MainWrapper>
    <MainWrapperContent>
      Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
      systemy CMS (Content Management System - system zarządzania treścią).
      Wdrożenia są utrzymywane na własnej infrastrukturze serwerowej co wraz
      utrzymywaniem poczty elektronicznej czy opracowywaniu i wdrażaniu
      rozwiązań dedykowanych stanowi kompleksową obsługę klienta.
    </MainWrapperContent>
    <MainWrapperProject>Project</MainWrapperProject>
    <MainWrapperOfer>Ofer</MainWrapperOfer>
    <MainWrapperPortfolio>Portfolio</MainWrapperPortfolio>
  </MainWrapper>
)

export default Main
