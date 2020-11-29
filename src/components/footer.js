import React from "react"

import styled from "styled-components"

const MainWrapperFooter = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  color: #fff;
  background-color: #000;
`

const MainWrapperFooterContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -120px auto 0 auto;
  height: auto;
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
  width: 400px;
  height: 560px;
`

const MainWrapperFooterContentBottom = styled.div`
  width: 900px;
  height: auto;
  margin: 0 auto;
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

const Footer = () => (
  <MainWrapperFooter>
    <hr style={{ borderBottom: "1px solid #717171", paddingTop: "120px" }} />
    <MainWrapperFooterContentTop>
      <MainWrapperFooterContentItemFirst>
        <div>
          <h1 style={{ fontSize: 20 }}>Dane firmy</h1>
          <div style={{ marginTop: 75 }}>
            <ul>
              <li>ul. Wielki Rów 40B</li>
              <li>87-100 Toruń</li>
              <li>NIP: 879-118-34-25</li>
              <li>REGON: 871179250</li>
            </ul>
          </div>
          <ButtonWrapper>Więcej informacji</ButtonWrapper>
        </div>
      </MainWrapperFooterContentItemFirst>
      <MainWrapperFooterContentItemSecond>
        <div>
          <h1 style={{ fontSize: 20 }}>Kontakt</h1>
          <div style={{ marginTop: 75 }}>
            <ul>
              <li>e-mail: biuro@extranet.pl</li>
            </ul>
            <p>Dział handlowy:</p>
            <ul>
              <li>tel.: +48 733 533 521</li>
            </ul>
            <p>Dział administracyjny:</p>
            <ul>
              <li> tel.: +48 695 423 695</li>
            </ul>
            <p> Godziny pracy:</p>
            <p>poniedziałek - piątek 8-16</p>
          </div>
          <ButtonWrapper>Kariera</ButtonWrapper>
        </div>
      </MainWrapperFooterContentItemSecond>
      <MainWrapperFooterContentItemThird>
        <div>
          <h1 style={{ fontSize: 20 }}>Napisz do nas</h1>
          <div style={{ marginTop: 75 }}>
            Temat wiadomości *
            <p style={{ fontSize: 15 }}>
              Akceptuję treść Regulaminu Strony zawierający m.in. klauzulę
              informacyjną dotyczącą przetwarzania danych osobowych.
              Administrator Strony informuje, że dane osobowe z niniejszego
              formularza będą przetwarzane w celu nawiązania kontaktu, nie
              dłużej niż przez 7 dni od momentu ich pozyskania. Zbieramy
              następujące dane osobowe: adres e-mail.
            </p>
            <ButtonWrapper>Rozwiń</ButtonWrapper>
            <p style={{ fontSize: 15 }}>
              * Wyrażam zgodę na otrzymywanie wiadomości drogą elektroniczną
            </p>
            <ButtonWrapper>Rozwiń</ButtonWrapper>
          </div>
          <ButtonWrapper>Prześlij</ButtonWrapper>
        </div>
      </MainWrapperFooterContentItemThird>
    </MainWrapperFooterContentTop>
    <hr style={{ borderBottom: "1px solid #717171" }} />
    <MainWrapperFooterContentBottom>
      <p style={{marginTop: 40}}>
        Wszystkie treści serwisu będące przedmiotem praw autorskich, o ile nie
        jest to stwierdzone inaczej, są dostępne na licencji Creative Commons
        Uznanie Autorstwa 4.0 Polska. Deklaracja Dostępności
      </p>
    </MainWrapperFooterContentBottom>
  </MainWrapperFooter>
)

export default Footer
