import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

export const Logo = () => {
    const data= useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {in: ".png"}, name: {in: "Recurso9logo_blanco"}}) {
          edges {
            node {
              childImageSharp {
                fixed(height: 40, quality: 90){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `)
    return (
        <LogoContainer>
            {data.allFile.edges.map((image, key)=>(
                            <LogoViKk key={key} fixed={image.node.childImageSharp.fixed}/>
                        ))}
        </LogoContainer>
    )
}
export default Logo;

const LogoContainer  = styled.div`

`

const LogoViKk = styled(Img)``