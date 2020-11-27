import React from "react"

import styled from "styled-components"

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 40px;
  background-color: #717171;
`
const HeroWrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const HeroWrapperHeaderTitle = styled.h1`
  display: inline-block;
  text-align: center;
  width: 100%;
`
const HeroWrapperHeaderSubtitle = styled.h2`
  display: inline-block;
  text-align: center;
  width: 100%;
`

const Hero = () => (
  <HeroWrapper>
    <HeroWrapperHeader>
      <HeroWrapperHeaderTitle>Extranet inernet creator</HeroWrapperHeaderTitle>
      <HeroWrapperHeaderSubtitle>
        live together, work together
      </HeroWrapperHeaderSubtitle> <button>dalej</button>
    </HeroWrapperHeader>
   
  </HeroWrapper>
)

export default Hero
