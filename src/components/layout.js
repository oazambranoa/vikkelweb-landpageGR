
import * as React from "react"
import Header from './header'
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"
import CookieConsent from "react-cookie-consent";


const Layout = ({ children }) => {


  return (
    <>
    <CookieConsent
    style={{ background: "rgba(9, 27, 40, 0.9)" }}
    buttonStyle={{background:"#ed6955", color:"#ffff", height:"45px",  borderRadius: "15px",}}
    buttonText="Acepto" overlay

    >
    Utilizamos cookies propias y de terceros para ofrecer una mejor experiencia. Al continuar navegando en nuestro
    sitio, autoriza su uso de acuerdo a nuestra
    <a css={`color: #ed6955;`} href='https://drive.google.com/file/d/1Udyu6FQhKEqIUdapeJzdKKBX9BqcNyly/view?usp=sharing' class='automatic' target='_blank'> politica de tratamiento de datos personales y manejo de cookies </a>
    
    
    </CookieConsent>
    <GlobalStyle />
      <Header />
      
        <main>{children}</main>
        <Footer />
    </>
  )
}


export default Layout
