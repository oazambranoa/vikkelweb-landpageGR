import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

function Funcionalidades() {
    return (
        <FuncionalidadesContainer>
            <FuncionalidadesWrapper>
                <FColumnaUno>
                    <Func>
                        <h3>Rutas optimizadas y eficientes</h3>
                        <p>Porque mereces lo mejor en cada rodada, nuestras rutas se optimizan según cada una de tus necesidades. Atraviesa la ciudad por la mejor vía o descarga las mejores rutas recomendadas para llegar a tu destino.</p>
                    </Func>
                    <Func>
                        <h3>Mapa interactivo</h3>
                        <p>En nuestro mapa encontraras puntos de interés, zonas seguras, estado vial, tiendas, sitios de mantenimiento y asistencia. Todo a un clic de distancia.</p>
                    </Func>
                </FColumnaUno>
                <FColumnaDos>
                    
                </FColumnaDos>
            </FuncionalidadesWrapper>
        </FuncionalidadesContainer>
    )
}

export default Funcionalidades
