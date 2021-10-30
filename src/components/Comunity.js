import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { GiPathDistance } from "react-icons/gi";
import { SiCrystal } from "react-icons/si";
import { IoBicycle } from "react-icons/io5";
import { Button } from './Button'


const Comunity = () => {
    const data= useStaticQuery(graphql`
    query  {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: "comunidad-ciclistas-latinoamerica"}}
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
        <ComunityContainer>
             <TitleCoDescription>Comunidad Vikkel</TitleCoDescription>
                <CoDescription>Vive la ciudad a tu manera con toda la red de ciclistas en un solo lugar, apoyándonos y creciendo juntos por la movilidad del futuro.</CoDescription>
            <ComunityWrapper>
                <CColumnaUno>
                    <CoData>
                        <GiPathDistance/>
                        <p>Recibe recomendaciones de las mejores rutas, por ciclistas como tú.</p>
                    </CoData>
                    <CoData>
                        <SiCrystal/>
                        <p>Pedaleando llenaras tu monedero y podrás canjealo por servicios en Vikkel app, y pronto por servicios en tu ciudad.</p>
                    </CoData>
                    <CoData>
                        <IoBicycle />
                        <p>¿Inconvenientes en la ruta?, ¿te caíste o te robaron? 
¡no te preocupes! toda la comunidad responderá tu llamado. </p>
                    </CoData>
                    <ContenedorButton>
                        <Button primary="true" round="true" to="/subscribe">Unirme ahora</Button>
                    </ContenedorButton>
                </CColumnaUno>
                <CColumnaDos>
                {data.allFile.edges.map((image, key)=>(
                        <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                    ))}
                </CColumnaDos>
            </ComunityWrapper>
        </ComunityContainer>
    )
}

export default Comunity
const TitleCoDescription = styled.div`
    font-size: clamp(1.5rem, 5vw,  2rem);
    margin-bottom: 1rem;
    text-align: left;
    font-weigth: lighter;
`
const CoDescription = styled.div`
    text-align: left;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw,  2rem);
    font-weight: 300;
`
const ComunityContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    heigth: 100%;
`
const ComunityWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`

const CColumnaUno = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
const CoData = styled.div`
padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    p {
        color: #3b3b3b;
    }
`

const CColumnaDos = styled.div`
    display: grid;
    grid-template-columns: 8fr 2fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;

    }
`
const ContenedorButton = styled.div`
    margin-top: 2rem;
`
const Images = styled(Img)`
    border-radius: 5px;
    height: 100%;

`