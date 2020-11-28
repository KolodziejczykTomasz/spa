import React from "react"

import styled from "styled-components"

const MainWrapperFooter = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  color: white;
  background-color: #717171;
`

const MainWrapperFooterContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 0 auto;
  height: 582px;
  width: 900px;
  padding: 30px 0 15px 0;
`

const MainWrapperFooterContentItemFirst = styled.div`
  width: 260px;
  height: 560px; 
`
const MainWrapperFooterContentItemSecond = styled.div`
  width: 300px;
  height: 560px;  
`
const MainWrapperFooterContentItemThird = styled.div`
  width: 300px;
  height: 560px;

`

const MainWrapperFooterContentBottom = styled.div`
  width: 900px;
  height: 110px;
  margin: 0 auto;
`

const Footer = () => (
  <MainWrapperFooter>
    <MainWrapperFooterContentTop>
      <MainWrapperFooterContentItemFirst>
        <div>
          <h1>Dane firmy</h1>
          <div></div>
        </div>
      </MainWrapperFooterContentItemFirst>
      <MainWrapperFooterContentItemSecond>
        <div>
          <h1>Kontakt</h1>
          <div></div>
        </div>
      </MainWrapperFooterContentItemSecond>
      <MainWrapperFooterContentItemThird>
        <div>
          <h1>Napisz do nas</h1>
          <div></div>
        </div>
      </MainWrapperFooterContentItemThird>
    </MainWrapperFooterContentTop>
    <MainWrapperFooterContentBottom>
      <p>
        Wszystkie treści serwisu będące przedmiotem praw autorskich, o ile nie
        jest to stwierdzone inaczej, są dostępne na licencji Creative Commons
        Uznanie Autorstwa 4.0 Polska. Deklaracja Dostępności
      </p>
    </MainWrapperFooterContentBottom>
  </MainWrapperFooter>
)

export default Footer
