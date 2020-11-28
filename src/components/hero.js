import React from "react"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"

import styled from "styled-components"

const HeroWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  padding-top: 40px;
  background-color: #717171;
`
const HeroWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  width: 100%;
  height: 40%;
  z-index: 999;
`
const HeroWrapperHeaderTitle = styled.div`
  display: inline-block;
  text-align: center;
  width: auto;
`
const HeroWrapperHeaderSubtitle = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  width: 400px;
  border-bottom: 3px solid red;
`
const ButtonWrapper = styled.button`
  display: block;
  margin: 50px auto;
  width: 50px;
  height: 50px;
  padding: 5px 5px;
  background-color: #c23b37;
  border: none;
`

const Hero = () => (
  <HeroWrapper>
    <HeroWrapperHeader>
      <HeroWrapperHeaderTitle>Extranet inernet creator</HeroWrapperHeaderTitle>
      <HeroWrapperHeaderSubtitle>
        live together, work together
      </HeroWrapperHeaderSubtitle>
      <ButtonWrapper>
        <FaAngleDown style={{ fontSize: 20, color: "white" }} />
      </ButtonWrapper>
    </HeroWrapperHeader>
  </HeroWrapper>
)

export default Hero
