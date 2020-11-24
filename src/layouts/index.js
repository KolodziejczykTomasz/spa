import React from "react"
import Navigation from "../components/navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import Footer from "../components/footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default MainLayout
