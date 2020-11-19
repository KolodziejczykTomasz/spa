import React from "react"
import Header from '../components/header'
import GlobalStyle from "../assets/styles/globalStyles"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />  
    <Header />
    {children}
  </>
)

export default MainLayout
