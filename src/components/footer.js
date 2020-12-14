import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
`

const WrapperLineTop = styled.div`
  border-bottom: 1px solid #717171;
  width: 100%;
  height: 120px;
  position: absolute;
`

const WrapperLineBottom = styled.div`
  display: flex;
  align-self: flex-end;
  border-top: 1px solid #717171;
  width: 100%;
  height: 120px;
  position: absolute;
`

const PhotoFooter = styled(Img)`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
`

const WrapperFooter = styled.div`
  display: block;
  position: absolute;
  color: #fff;
  width: 80%;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  font-family: "Lato";
`
const WrapperFooterContentTop = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.4fr 0.3fr;
  font-family: "Lovelo Black";
`
const WrapperFooterContentItemFirst = styled.div`
  height: 560px;
  font-size: 20px;
  line-height: 24px;
  font-family: "Lato";
`
const WrapperFooterContentItemSecond = styled.div`
  height: 560px;
  font-size: 20px;
  line-height: 24px;
  font-family: "Lato";
`
const WrapperFooterContentItemThird = styled.div`
  height: 560px;
  font-family: "Lato";
`

const WrapperFooterContentBottom = styled.div`
  margin-top: 120px;
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

const FooterList = styled.ul``
const FooterListItem = styled.li`
  list-style: none;  
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg_footer.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <PhotoFooter
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt=""
        />
        <WrapperLineTop />
        <WrapperFooter>
          <WrapperFooterContentTop>
            <WrapperFooterContentItemFirst>
              <div>
                <h1
                  style={{
                    fontSize: 20,
                    marginTop: 40,
                    fontFamily: "Lovelo Black",
                  }}
                >
                  Dane firmy
                </h1>
                <div style={{ marginTop: 80 }}>
                  <FooterList>
                    <FooterListItem>ul. Wielki Rów 40B</FooterListItem>
                    <FooterListItem>87-100 Toruń</FooterListItem>
                    <FooterListItem>NIP: 879-118-34-25</FooterListItem>
                    <FooterListItem>REGON: 871179250</FooterListItem>
                  </FooterList>
                </div>
                <ButtonWrapper>Więcej informacji</ButtonWrapper>
              </div>
            </WrapperFooterContentItemFirst>
            <WrapperFooterContentItemSecond>
              <div>
                <h1
                  style={{
                    fontSize: 20,
                    marginTop: 40,
                    fontFamily: "Lovelo Black",
                  }}
                >
                  Kontakt
                </h1>
                <div style={{ marginTop: 80 }}>
                  <FooterList>
                    <FooterListItem style={{fontSize: 18}}>e-mail: biuro@extranet.pl</FooterListItem>
                  </FooterList>
                  <h2
                    style={{
                      fontSize: 20,
                      marginTop: 15,
                    }}
                  >
                    Dział handlowy:
                  </h2>
                  <FooterList>
                    <FooterListItem style={{fontSize: 18}}>tel.: +48 733 533 521</FooterListItem>
                  </FooterList>
                  <h2
                    style={{
                      fontSize: 20,
                      marginTop: 15,
                    }}
                  >
                    Dział administracyjny:
                  </h2>
                  <FooterList>
                    <FooterListItem style={{fontSize: 18}}> tel.: +48 695 423 695</FooterListItem>
                  </FooterList>
                  <h2
                    style={{
                      fontSize: 20,
                      marginTop: 15,
                    }}
                  >                   
                    Godziny pracy:
                  </h2>
                  <p style={{fontSize: 18}}>poniedziałek - piątek 8-16</p>
                </div>
                <ButtonWrapper>Kariera</ButtonWrapper>
              </div>
            </WrapperFooterContentItemSecond>
            <WrapperFooterContentItemThird>
              <div>
                <h1
                  style={{
                    fontSize: 20,
                    marginTop: 40,
                    fontFamily: "Lovelo Black",
                  }}
                >
                  Napisz do nas
                </h1>
                <div style={{ marginTop: 80 }}>
                  Temat wiadomości *
                  <p style={{ fontSize: 15 }}>
                    Akceptuję treść Regulaminu Strony zawierający m.in. klauzulę
                    informacyjną dotyczącą przetwarzania danych osobowych.
                    Administrator Strony informuje, że dane osobowe z
                    niniejszego formularza będą przetwarzane w celu nawiązania
                    kontaktu, nie dłużej niż przez 7 dni od momentu ich
                    pozyskania. Zbieramy następujące dane osobowe: adres e-mail.
                  </p>
                  <ButtonWrapper>Rozwiń</ButtonWrapper>
                  <p style={{ fontSize: 15 }}>
                    * Wyrażam zgodę na otrzymywanie wiadomości drogą
                    elektroniczną
                  </p>
                  <ButtonWrapper>Rozwiń</ButtonWrapper>
                </div>
                <ButtonWrapper>Prześlij</ButtonWrapper>
              </div>
            </WrapperFooterContentItemThird>
          </WrapperFooterContentTop>

          <WrapperFooterContentBottom>
            <p>
              Wszystkie treści serwisu będące przedmiotem praw autorskich, o ile
              nie jest to stwierdzone inaczej, są dostępne na licencji Creative
              Commons Uznanie Autorstwa 4.0 Polska. Deklaracja Dostępności
            </p>
          </WrapperFooterContentBottom>
        </WrapperFooter>
        <WrapperLineBottom />
      </Wrapper>
    )}
  />
)

export default Footer
