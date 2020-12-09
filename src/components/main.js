import React from "react"
import Image from "../components/image"
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

const MainWrapperProject = styled.div`
  max-height: 1000px;
  padding-bottom: 75px;
`

const MainWrapperProjectSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`
const MainWrapperProjectSectionLeft = styled.div`
  width: 65%;
`
const MainWrapperProjectSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`
const MainWrapperProjectSectionRightTop = styled.div`
  max-height: 400px;
`
const MainWrapperProjectSectionRightBottom = styled.div`
  max-height: 400px;
  flex-shrink: 1;
`

const MainWrapperOfer = styled.div`
  display: grid;
  width: 100%;
  height: 450px;
  color: white;
`

const MainWrapperOferContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  position: absolute;
  width: 80%;

  padding: 50px 0 185px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  font-family: Lato, sans-serif;
`
const PhotoOfert = styled(Image)`
  background-size: cover;
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
`
const Header = styled.div`
  display: grid;
  text-align: center;
  margin: 0 auto 25px auto;
  width: 200px;
  border-bottom: 3px solid #c23b37;
  font-size: 35px;
  font-family: "Lovelo Black";
  line-height: 42px;
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
const MainWrapperPortfolioSectionContentItemFooter = styled.div`
  display: flex;
  position: absolute;
  height: 80%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 5px;
  position: relative;
  font-size: 15px;
  font-family: "Lovelo Black";
  transition: 0.3s ease-in-out;
  opacity: 0;
  z-index: 1;
`

const MainWrapperPortfolioSectionContentItemHeader = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 35px;
  line-height: 53px;
  color: #000;
  padding-left: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  :hover {
    color: #000;
  }
`
const PhotoPortfolio = styled(Image)`
  background-size: cover;
  height: 100%;
  width: 100%;
  display: block;
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
  z-index: 9999;
  transition: 0.3s ease-in-out;
  :focus {
    border: 3px dotted #c23b37;
  }
  ${MainWrapperPortfolioSectionContentItemHeader}:after {
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
    ${MainWrapperPortfolioSectionContentItemFooter} {
      opacity: 1;
    }
    ${MainWrapperPortfolioSectionContentItemHeader}:after {
      width: 100%;
      left: 0;
    }
  }
`

const PhotoProject = styled(Image)`
  background-size: cover;
  height: 100%;
  width: 100%;
`

const PhotoProjectRight = styled(Image)`
  background-size: cover;
  height: 100%;
  width: 100%;
`

const Main = props => (
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
        <MainWrapperProjectSectionLeft>
          <PhotoProject imgsrc="project1.jpg" />
        </MainWrapperProjectSectionLeft>
        <MainWrapperProjectSectionRight>
          <MainWrapperProjectSectionRightTop>
            <PhotoProjectRight imgsrc="project2.jpg" />
          </MainWrapperProjectSectionRightTop>
          <MainWrapperProjectSectionRightBottom>
            <PhotoProjectRight imgsrc="project3.jpg" />
          </MainWrapperProjectSectionRightBottom>
        </MainWrapperProjectSectionRight>
      </MainWrapperProjectSection>
    </MainWrapperProject>
    <MainWrapperOfer>
      <PhotoOfert imgsrc="bg_ofert.png" />
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
          <PhotoPortfolio imgsrc="ofert1.jpg" />
          <MainWrapperPortfolioSectionContentItemHeader>
            Strony internetowe
          </MainWrapperPortfolioSectionContentItemHeader>
          <MainWrapperPortfolioSectionContentItemFooter>
            Dowiedz się więcej
          </MainWrapperPortfolioSectionContentItemFooter>
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          <PhotoPortfolio imgsrc="ofert2.jpg" />
          <MainWrapperPortfolioSectionContentItemHeader>
            Poczta elektroniczna
          </MainWrapperPortfolioSectionContentItemHeader>
          <MainWrapperPortfolioSectionContentItemFooter>
            Dowiedz się więcej
          </MainWrapperPortfolioSectionContentItemFooter>
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          <PhotoPortfolio imgsrc="ofert3.jpg" />
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
