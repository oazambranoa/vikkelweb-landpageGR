import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from './Button'
const Funcionalidades = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: "ciclismo-ruta-mapas"}}
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
        <FuncionalidadesContainer>
            <FuncionalidadesWrapper>
                <FColumnaDos>
                    {data.allFile.edges.map((image, key)=>(
                            <ImagesF key={key} fluid={image.node.childImageSharp.fluid}/>
                        ))}
                </FColumnaDos>
                <FColumnaUno>
                    <Func>
                        <h3>Rutas optimizadas y eficientes</h3>
                        <p>Porque mereces lo mejor en cada rodada, nuestras rutas se optimizan según cada una de tus necesidades. Atraviesa la ciudad por la mejor vía o descarga las mejores rutas recomendadas para llegar a tu destino.</p>
                    </Func>
                    <Func>
                        <h3>Mapa interactivo</h3>
                        <p>En nuestro mapa encontrarás puntos de interés, zonas seguras, estado vial, tiendas, sitios de mantenimiento y asistencia. Todo a un clic de distancia.</p>
                    </Func>
                    <FContenedorButton>
                        <Button primary="true" round="true" to="/#suscribete">Suscríbete</Button>
                    </FContenedorButton>
                </FColumnaUno>
                
            </FuncionalidadesWrapper>
        </FuncionalidadesContainer>
    )
}

export default Funcionalidades

const FuncionalidadesContainer = styled.div`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw - 1300px) / 2);
heigth: 100%;

`
const FuncionalidadesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`

const FColumnaUno = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;

`
const Func  = styled.div`
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


const FColumnaDos = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    display: grid;
    grid-template-columns: 8fr 2fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;

    }



`
const ImagesF = styled(Img)`
    border-radius: 5px;
    height: 100%;

`
const FContenedorButton = styled.div`
    margin-top: 2rem;

`
