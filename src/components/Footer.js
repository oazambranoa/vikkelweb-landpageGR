import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './Button'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDescr>
                    <h1> Vikkel</h1>
                </FooterDescr>
                <FooterLinksItems>
                    <FooterLinkTitle>Aplicacion Movil</FooterLinkTitle>
                    <FooterLink to='/'>Caracteristicas</FooterLink>
                    <FooterLink to='/'>Videos</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Comunidad</FooterLinkTitle>
                    <FooterLink to='/'>Blog</FooterLink>
                    <FooterLink to='/'>Tienda</FooterLink>
                    <FooterLink to='/'>Eventos</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Empresa</FooterLinkTitle>
                    <FooterLink to='/'>Contactanos</FooterLink>
                    <FooterLink to='/'>Terminos y condiciones</FooterLink>
                    <FooterLink to='/'>Politica de privacidad</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                <FooterLinkTitle>Siguenos</FooterLinkTitle>
                </FooterLinksItems>
                <FooterLinksItems>
                    <Button primary="true" round="true" to="/subscribe">Suscribete</Button>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterContainer>
        
    )
}
export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1000px) / 3);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #000;
    background: #091b28;
`
const FooterDescr = styled.div`
    padding: 0 2rem;
    h1{
        margin-bottom: 3rem;
        color: #ed6955;

    }
    @media screen and(max-width: 400px){
        padding: 1rem;
    }

`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns:  repeat(3, 1fr);
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