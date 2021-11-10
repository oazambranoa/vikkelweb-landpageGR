
import * as React from "react"
import Header from './header'
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"
import CookieConsent from "react-cookie-consent";


const Layout = ({ children }) => {


  return (
    <>
    <CookieConsent
    style={{ background: "#091b28" }}
    buttonStyle={{background:"#ed6955", color:"#ffff", height:"40px"}}
    buttonText="Acepto"

    >
    Este sitio usa cookies. Vea nuestra
    <a css={`color: #ed6955;`} href='https://drive.google.com/file/d/1Udyu6FQhKEqIUdapeJzdKKBX9BqcNyly/view?usp=sharing' class='automatic' target='_blank'> Política de privacidad</a> para más información
    
    
    </CookieConsent>
    <GlobalStyle />
      <Header />
      
        <main>{children}</main>
        <Footer />
    </>
  )
}


export default Layout
