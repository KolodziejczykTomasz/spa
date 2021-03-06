import React, { useEffect } from "react"
import Image from "../components/image"
import styled from "styled-components"
import "aos/dist/aos.css"

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
  padding: 50px 0 50px 0;
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
  margin: 30px auto 0 auto;
  position: relative;
  overflow: hidden;
  width: auto;
  padding: 5px 20px;
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
  margin: 30px auto 0 auto;
  position: relative;
  overflow: hidden;
  width: auto;
  padding: 5px 20px;
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

/** Project Section **/

const ProjectSection = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  overflow: hidden;
  cursor: pointer;
`

const HeaderSectionProject = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: calc(50% - 200px);
  font-size: 35px;
  text-transform: uppercase;
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
  margin-top: calc(50% - 150px);
  font-size: 25px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  height: 123px;
  width: auto;
  color: #fff;
  padding-left: 5px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-in-out;
`

const ProjectSectionContentWrapper = styled.button`
  display: grid;
  position: absolute;
  overflow: hidden;
  background: transparent;
  width: 100%;
  height: 100%;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`

const BackgroudProjectLeft = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`

const ProjectSectionLeft = styled.div`
  display: inherit;
  position: relative;
  height: auto;
  transition: 0.3s ease-in;
  ${HeaderSectionProject}:after {
    position: absolute;
    transition: 0.3s ease-in-out;
    content: "";
    width: 0;
    left: 0;
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
    img {
      transform: rotate(0.1deg) scale(1.3);
    }
    :focus {
      border: 3px dotted #c23b37 !important;
    }
  }
`

const ProjectSectionRight = styled.div`
  display: grid;
`

const BackgroudProjectTop = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`

const ProjectSectionRightTop = styled.div`
  display: grid;
  position: relative;
  height: 100%;
  transition: 0.5s;
  ${HeaderSectionProjectRight}:after {
    position: absolute;
    transition: 0.3s ease-in-out;
    content: "";
    width: 0;
    left: 0;
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
    img {
      transform: rotate(0.1deg) scale(1.3);
    }
    :focus {
      border: 3px dotted #c23b37 !important;
    }
  }
`

const BackgroudProjectBottom = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`

const ProjectSectionRightBottom = styled.div`
  display: grid;
  position: relative;
  height: 100%;
  transition: 0.5s;
  ${HeaderSectionProjectRight}:after {
    position: absolute;
    transition: 0.3s ease-in-out;
    content: "";
    width: 0;
    left: 0;
    bottom: 0;
    height: 4px;
    background: #c23b37;
  }
  :hover {
    ${BackgroudProjectBottom} {
      opacity: 1;
      :focus {
        border: 3px dotted #c23b37 !important;
      }
    }
    ${HeaderSectionProjectRight}:after {
      width: 100%;
      left: 0;
    }
    img {
      transform: rotate(0.1deg) scale(1.3);
    }
  }
`
const PhotoProject = styled(Image)`
  width: 100%;
  height: 100%;
  display: grid;
  object-fit: cover;
`

const PhotoProjectRight = styled(Image)`
  width: 100%;
  height: 100%;
  display: grid;
`

/** Ofer Section **/

const OferSection = styled.div`
  display: grid;
  width: 100%;
  height: 450px;
  color: white;
`

const OferContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  position: absolute;
  margin-left: 10%;
  margin-right: 10%;
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

/** Portfolio Section **/

const PortfolioSection = styled.div`
  width: 100%;
`

const PhotoPortfolio = styled(Image)`
  width: 100%;
  height: 100%;
  display: grid;
`
const BackgroudPortfolio = styled.div`
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`
const PortfolioSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -75px auto 0 auto;
  height: 582px;
  width: 70%;
  padding: 0 0 15px 0;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 1100px) {
        justify-content: center;
    flex-direction: column;
    height: auto;
  }
`

const PortfolioSectionContentWrapper = styled.button`
  display: grid;
  position: absolute;
  overflow: hidden;
  background: transparent;
  width: 100%;
  height: 100%;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`
const PortfolioSectionContentItemFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  height: auto;
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-family: "Lovelo Black";
  transition: 0.3s ease-in-out;
  opacity: 0;
`

const PortfolioSectionContentItemHeader = styled.div`
  display: gird;
  position: absolute;
  opacity: 1;
  z-index: 999;
  text-align: left;
  font-size: 35px;
  font-weight: 600;
  line-height: 53px;
  height: auto;
  color: #fff;
  padding-left: 5px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  :hover {
    color: #fff;
  }
`

const PortfolioSectionContentItem = styled.div`
  display: grid;
  position: relative;
  width: 310px;
  height: 560px;
  transition: 0.3s;
  font-size: 35px;
  font-family: "Lovelo Black";
  line-height: 42px;
  text-align: left;
  transition: 0.3s ease-in-out;
  :focus {
    border: 3px dotted #c23b37 !important;
  }
  ${PortfolioSectionContentItemHeader}:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    left: 0;
    bottom: 0;
    height: 4px;
    background: #c23b37;
  }
  :hover {
    ${PortfolioSectionContentItemFooter} {
      opacity: 1;
    }
    ${PortfolioSectionContentItemHeader}:after {
      width: 100%;
      left: 0;
    }
    ${BackgroudPortfolio} {
      opacity: 1;
    }
    img {
      transform: scale(1.3);
    }
  }
  @media (max-width: 1100px) {
        width: 100%;
  }
`

const Main = () => {
let AOS;
  useEffect(() => {   
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <MainWrapper>
      <MainWrapperSection>
        <MainWrapperSectionContent
          data-aos="fade-up"
          data-aos-delay="5"
          data-aos-duration="1000"
        >
          <Header>Filozofia firmy</Header>
          <MainWrapperSectionContentText>
            Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
            systemy CMS (Content Management System - system zarządzania
            treścią). Wdrożenia są utrzymywane na własnej infrastrukturze
            serwerowej co wraz utrzymywaniem poczty elektronicznej czy
            opracowywaniu i wdrażaniu rozwiązań dedykowanych stanowi kompleksową
            obsługę klienta.
          </MainWrapperSectionContentText>
          <ButtonWrapperContent>dowiedz się więcej</ButtonWrapperContent>
        </MainWrapperSectionContent>
      </MainWrapperSection>
      <ProjectSection
        data-aos="fade-up"
        data-aos-delay="5"
        data-aos-duration="1000"
      >
        <ProjectSectionLeft>
          <PhotoProject imgsrc="project1.jpg" />
          <ProjectSectionContentWrapper>
            <BackgroudProjectLeft>
              <HeaderSectionProject>
                <h1>usługi</h1>Urząd Gminy 1
              </HeaderSectionProject>
            </BackgroudProjectLeft>
          </ProjectSectionContentWrapper>
        </ProjectSectionLeft>
        <ProjectSectionRight>
          <ProjectSectionRightTop>
            <PhotoProjectRight imgsrc="project2.jpg" />
            <ProjectSectionContentWrapper>
              <BackgroudProjectTop>
                <HeaderSectionProjectRight>
                  <h1>usługi</h1>Urząd Gminy 2
                </HeaderSectionProjectRight>
              </BackgroudProjectTop>
            </ProjectSectionContentWrapper>
          </ProjectSectionRightTop>
          <ProjectSectionRightBottom>
            <PhotoProjectRight imgsrc="project3.jpg" />
            <ProjectSectionContentWrapper>
              <BackgroudProjectBottom>
                <HeaderSectionProjectRight>
                  <h1>usługi</h1>Urząd Gminy 3
                </HeaderSectionProjectRight>
              </BackgroudProjectBottom>
            </ProjectSectionContentWrapper>
          </ProjectSectionRightBottom>
        </ProjectSectionRight>
      </ProjectSection>
      <OferSection>
        <PhotoOfert imgsrc="bg_ofert.jpg" />
        <OferContent
          data-aos="fade-up"
          data-aos-delay="5"
          data-aos-duration="1000"
        >
          <Header>Nasza oferta</Header>
          <div style={{ lineHeight: 1.6 }}>
            Nasza firma specjalizuje się w tworzeniu stron i serwisów opartych o
            systemy CMS (Content Management System - system zarządzania
            treścią). Wdrożenia są utrzymywane na własnej infrastrukturze
            serwerowej co wraz utrzymywaniem poczty elektronicznej czy
            opracowywaniu i wdrażaniu rozwiązań dedykowanych stanowi kompleksową
            obsługę klienta.
          </div>
          <ButtonWrapper>Zobacz więcej</ButtonWrapper>
        </OferContent>
      </OferSection>
      <PortfolioSection>
        <PortfolioSectionContent
          data-aos="fade-up"
          data-aos-delay="5"
          data-aos-duration="1000"
        >
          <PortfolioSectionContentItem>
            <PhotoPortfolio imgsrc="ofert1.jpg" />
            <PortfolioSectionContentWrapper>
              <PortfolioSectionContentItemHeader>
                Strony internetowe
              </PortfolioSectionContentItemHeader>
              <BackgroudPortfolio>
                <PortfolioSectionContentItemFooter>
                  Dowiedz się więcej
                </PortfolioSectionContentItemFooter>
              </BackgroudPortfolio>
            </PortfolioSectionContentWrapper>
          </PortfolioSectionContentItem>

          <PortfolioSectionContentItem>
            <PhotoPortfolio imgsrc="ofert2.jpg" />
            <PortfolioSectionContentWrapper>
              <PortfolioSectionContentItemHeader>
                Poczta elektroniczna
              </PortfolioSectionContentItemHeader>
              <BackgroudPortfolio>
                <PortfolioSectionContentItemFooter>
                  Dowiedz się więcej
                </PortfolioSectionContentItemFooter>
              </BackgroudPortfolio>
            </PortfolioSectionContentWrapper>
          </PortfolioSectionContentItem>
          
          <PortfolioSectionContentItem>
            <PhotoPortfolio imgsrc="ofert3.jpg" />
            <PortfolioSectionContentWrapper>
              <PortfolioSectionContentItemHeader>
                Rozwiązania dedykowane
              </PortfolioSectionContentItemHeader>
              <BackgroudPortfolio>
                <PortfolioSectionContentItemFooter>
                  Dowiedz się więcej
                </PortfolioSectionContentItemFooter>
              </BackgroudPortfolio>
            </PortfolioSectionContentWrapper>
          </PortfolioSectionContentItem>
        </PortfolioSectionContent>
      </PortfolioSection>
    </MainWrapper>
  )}

export default Main
