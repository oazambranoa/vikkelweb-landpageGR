import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from './Button'



const Valores = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: "ciclista-usando-celular"}}
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2248, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    
    `)


    return (
        <ValoresContainer>
            <TopLine>
            Todo lo que necesitas para que tu rodada sea increíble
            </TopLine>
            <Description>
            Creamos unión y soporte en la comunidad, brindando al ciclista confianza y seguridad, que inspira una movilidad hacia el futuro.
            </Description>
            <ContentWrapper>
                <ColumnaUno>
                <Valor>
                    <h3>Los mejores servicios tecnológicos en la ruta.</h3>
                    <p>Mapas, rutas top de ciudad, todo lo que necesites para tu bicicleta y mucho más en Vikkel app.</p>
                </Valor>
                <Valor>
                    <h3>Vive la comunidad en tus manos.</h3>
                    <p>Planifica salidas con tus parceros, entérate de las rodadas de tu ciudad y las rutas más recomendadas.</p>
                </Valor>
                <Valor>
                    <h3>Siéntete seguro y confiado en tu bicicleta.</h3>
                    <p>Sabemos que tú y tu bici son únicos, por eso te acompañaremos ante hurtos, accidentes o emergencias.</p>
                </Valor>
                <ContenedorButton>
                    <Button primary="true" round="true" to="/#suscribete">¡Quiero saber más!</Button>
                </ContenedorButton>
                </ColumnaUno>
                <ColumnaDos>
                    {data.allFile.edges.map((image, key)=>(
                        <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                    ))}
                    
                </ColumnaDos>
            </ContentWrapper>
        </ValoresContainer>
    )
}

export default Valores

const ValoresContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    heigth: 100%;

`
const TopLine = styled.p` 
    font-size: clamp(1.5rem, 5vw,  2rem);
    margin-bottom: 0.5rem;
    text-align: center;
    font-weigth: lighter;

`
const Description = styled.p`
    text-align: center;
    margin-bottom: 4rem;
    font-size: clamp(0.5rem, 5vw,  1rem);
    font-weight: 300;


`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`
const ColumnaUno = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;

`
const Valor = styled.div`
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

const ColumnaDos = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    display: grid;
    grid-template-columns: 8fr 2fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 900px){
        grid-template-columns: 1fr;

    }

`
const Images = styled(Img)`
    border-radius: 5px;
    height: 100%;

`

const ContenedorButton = styled.div`
    margin-top: 2rem;
`


