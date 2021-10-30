import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Prices= ()=> {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: "capital-semilla-medellin"}}
        ) {
          edges {
            node {
              childImageSharp {
                fixed(height: 110, quality: 90){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `)
    return (
        <PricesContainer>
                <Pricesh1>Seguimos creciendo</Pricesh1>
                <br/>
                <Prices2h1>Ganadores</Prices2h1>
                <ImgContainer>
                  {data.allFile.edges.map((image, key)=>(
                          <Images key={key} fixed={image.node.childImageSharp.fixed}/>
                      ))}
                </ImgContainer>
        </PricesContainer>
    )
}

export default Prices
const Pricesh1 = styled.p`
  font-size: clamp(1.5rem, 5vw,  2rem);
  margin-bottom: 1rem;
  text-align: center;
  font-weigth: lighter;
`
const Prices2h1 = styled.p`
  font-size: clamp(1.5rem, 5vw,  2rem);
  margin-bottom: 1rem;
  text-align: center;
  font-weigth: lighter;
`
const PricesContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  heigth: 100%;
`

const Images = styled(Img)`
    border-radius: 0px;
    height: 100%;
`
const ImgContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 7rem;
`
