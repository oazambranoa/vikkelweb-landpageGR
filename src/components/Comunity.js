import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { GiPathDistance } from "react-icons/gi";
import { SiCrystal } from "react-icons/si";
import { IoBicycle } from "react-icons/io5";


function Comunity() {
    return (
        <ComunityContainer>
            <ComunityWrapper>
                <TitleCoDescription>Comunidad Vikkel</TitleCoDescription>
                <CoDescription>Vive la ciudad a tu manera con toda la red de ciclistas en un solo lugar, apoyándonos y creciendo juntos por la movilidad del futuro.</CoDescription>
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
                </CColumnaUno>
                <CColumnaDos>

                </CColumnaDos>
            </ComunityWrapper>
        </ComunityContainer>
    )
}

export default Comunity
