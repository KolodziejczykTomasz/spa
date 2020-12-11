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
  display: block;
  position: relative;
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

const MainWrapperProjectSection = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  grid-template-rows: 1fr;
  max-height: 800px;
  overflow: hidden;
  cursor: pointer;
`

const HeaderSectionProject = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: calc(50% - 200px);
  font-size: 35px;
  line-height: 53px;
  text-align: center;
  height: 200px;
  width: 300px;
  color: #fff;
  padding-left: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-in-out;
`

const HeaderSectionProjectRight = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: calc(50% - 200px);
  font-size: 25px;
  line-height: 23px;
  text-align: center;
  height: 130px;
  width: 200px;
  color: #fff;
  padding-left: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-in-out;
`

const BackgroudProjectLeft = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`

const MainWrapperProjectSectionLeft = styled.div`
  display: grid;
  position: relative;
  height: auto;
  transition: 0.3s ease-in;
  ${HeaderSectionProject}:after {
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
    ${BackgroudProjectLeft} {
      opacity: 1;
    }
    ${HeaderSectionProject}:after {
      width: 100%;
      left: 0;
    }
    transform: rotate(2deg) scale(1.1);
  }
`

const MainWrapperProjectSectionRight = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  position: relative;
  overflow: hidden;
`

const BackgroudProjectTop = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`

const MainWrapperProjectSectionRightTop = styled.div`
  display: grid;
  height: auto;
  transition: 0.5s;
  ${HeaderSectionProjectRight}:after {
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
    ${BackgroudProjectTop} {
      opacity: 1;
    }
    ${HeaderSectionProjectRight}:after {
      width: 100%;
      left: 0;
    }
    transform: rotate(2deg) scale(1.1);
  }
`

const BackgroudProjectBottom = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`

const MainWrapperProjectSectionRightBottom = styled.div`
  display: grid;
  height: auto;
  transition: 0.5s;
  ${HeaderSectionProjectRight}:after {
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
    ${BackgroudProjectBottom} {
      opacity: 1;
    }
    ${HeaderSectionProjectRight}:after {
      width: 100%;
      left: 0;
    }
    transform: rotate(2deg) scale(1.1);
  }
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
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
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

const MainWrapperPortfolioSectionContentItem = styled.div`
  width: 310px;
  height: 560px;
  border: 3px dotted black;
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
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: cover;
  position: absolute;
`

const PhotoProjectRight = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

const PhotoPortfolio = styled(Image)`
  width: 20px;
  height: 100%;
  display: block;
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
    <MainWrapperProjectSection>
      <MainWrapperProjectSectionLeft>
        <PhotoProject imgsrc="project1.jpg" />
        <BackgroudProjectLeft>
          <HeaderSectionProject>
            {" "}
            <h1>usługi</h1>Urząd Gminy 1
          </HeaderSectionProject>
        </BackgroudProjectLeft>
      </MainWrapperProjectSectionLeft>
      <MainWrapperProjectSectionRight>
        <MainWrapperProjectSectionRightTop>
          <PhotoProjectRight imgsrc="project2.jpg" />
          <BackgroudProjectTop>
            <HeaderSectionProjectRight>
              <h1>usługi</h1>Urząd Gminy 2
            </HeaderSectionProjectRight>
          </BackgroudProjectTop>
        </MainWrapperProjectSectionRightTop>
        <MainWrapperProjectSectionRightBottom>
          <PhotoProjectRight imgsrc="project3.jpg" />
          <BackgroudProjectBottom>
            <HeaderSectionProjectRight>
              <h1>usługi</h1>Urząd Gminy 3
            </HeaderSectionProjectRight>
          </BackgroudProjectBottom>
        </MainWrapperProjectSectionRightBottom>
      </MainWrapperProjectSectionRight>
    </MainWrapperProjectSection>
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
          <div>
            <PhotoPortfolio imgsrc="ofert2.jpg" />
          </div>

          <MainWrapperPortfolioSectionContentItemHeader>
            Poczta elektroniczna
          </MainWrapperPortfolioSectionContentItemHeader>
          <MainWrapperPortfolioSectionContentItemFooter>
            Dowiedz się więcej
          </MainWrapperPortfolioSectionContentItemFooter>
        </MainWrapperPortfolioSectionContentItem>
        <MainWrapperPortfolioSectionContentItem>
          <div>
            <Image imgsrc="ofert3.jpg" style={{ width: 20 }} />
          </div>
        </MainWrapperPortfolioSectionContentItem>
      </MainWrapperPortfolioSectionContent>
    </MainWrapperPortfolioSection>
  </MainWrapper>
)

export default Main
