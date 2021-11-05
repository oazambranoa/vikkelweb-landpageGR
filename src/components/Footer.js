import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './Button'
import Logo from './Logo'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDescr>
                    <Logo />
                </FooterDescr>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItems>
                    <FooterLinkTitle>Aplicación Móvil</FooterLinkTitle>
                    <FooterLink to='/'>Características</FooterLink>
                    <FooterLink to='/'>Videos</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Comunidad</FooterLinkTitle>
                    <FooterLink to='/'>Blog</FooterLink>
                    <FooterLink to='/'>Tienda</FooterLink>
                    <FooterLink to='/'>Eventos</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Empresa</FooterLinkTitle>
                    <FooterLink href="mailto:contacto@vikkel.co?Subject=Soy%20negocio%20y%20quiero%20más%20%20información.">Contactanos</FooterLink>
                    <FooterLink to='https://drive.google.com/file/d/1CFex9Bhct2y29ZranDvv7Sp4NqIxlVkO/view?usp=sharing' target="_blank">Términos y condiciones</FooterLink>
                    <FooterLink to='https://drive.google.com/file/d/1Udyu6FQhKEqIUdapeJzdKKBX9BqcNyly/view?usp=sharing' target="_blank">Política de privacidad</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                <FooterLinkTitle>Síguenos</FooterLinkTitle>
                <FooterLink to='https://www.facebook.com/vikkelco/' target="_blank"><BsFacebook/></FooterLink>
                <FooterLink to='https://instagram.com/vikkelco' target="_blank"><BsInstagram/></FooterLink>
                <FooterLink to='https://www.linkedin.com/'><BsLinkedin/></FooterLink>
                <Button primary="true" round="true"  to="/#suscribete">Suscríbete</Button>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterContainer>
        
    )
}
export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    color: #000;
    background: #091b28;
`
const FooterDescr = styled.div`
    padding: 0 2rem;
    h1{
        margin-bottom: 3rem;
        color: #ed6955;

    }
    @media screen and(max-width: 450px){
        padding: 1rem;
    }

`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns:  repeat(4, 25%);
    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }
`
const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 3rem;
    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`



const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
    color: #fff;
`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #fff;

    &:hover{
        color: #ed6955;
        transition: 0.3s ease-out;
    }

`
/*#3d3d4e color a tener en cuenta*/