import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from './Button'

const Bussiness = ()=> {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: "mecanico-reparando-bicicleta"}}
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 90) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)
    return (
        <BussinesContainer>
            <BussinesWrapper>
                <BussinesColumnaDos>
                    {data.allFile.edges.map((image, key)=>(
                            <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                        ))}
                </BussinesColumnaDos>
                <BussinesColumnaUno>
                    <BussinesTitle id='empresas'>Vikkel Business </BussinesTitle>
                    <BussinessParraf>
                        <p>¡No pases desapercibido!, se visible en el mapa de Vikkel App, todos los ciclistas te encontraran fácilmente en sus rutas.</p>
                        <p>Si tienes algo que ofrecer a nuestra comunidad, no lo dudes, crece con nosotros y vende tus servicios o productos  a un segmento de mercado totalmente centralizado.</p>
                        <p>Oferta con nosotros.</p>
                    </BussinessParraf>
                    <ContenedorButton>
                        
                            <Button primary="true" round="true" to="/#suscribete">¡Si, quiero!</Button>
                        
                            <Button primary="true" round="true" href="mailto:contacto@vikkel.co?Subject=Soy%20negocio%20y%20quiero%20más%20%20información.">Contactanos</Button>
                         
                    </ContenedorButton>
                </BussinesColumnaUno>
            </BussinesWrapper>
        </BussinesContainer>
    )
}

export default Bussiness

const BussinesContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    heigth: 100%;
`
const BussinesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`
const BussinesColumnaDos = styled.div`
    display: grid;
    grid-template-columns: 8fr 2fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;

    }


`
const BussinesColumnaUno = styled.div`
    display: grid;
    grid-template-rows: 0.3fr 1fr;
`
const BussinesTitle = styled.div`
    font-size: clamp(1.5rem, 5vw,  2rem);
    margin-bottom: 0.1rem;
    text-align: left;
    font-weight: bold;
`
const Images = styled(Img)`
    border-radius: 5px;
    height: 100%;

`
const ContenedorButton = styled.div`
    margin-top: 2rem;
    
`
const BussinessParraf = styled.div`
    margin-top: 0.75rem;
        p{
            margin-bottom: 1rem;
        }
`