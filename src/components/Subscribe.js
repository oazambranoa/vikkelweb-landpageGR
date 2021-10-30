import React from 'react'
import styled from 'styled-components'
import FormBg from '../assets/images/vikkel/bicis.jpg'
import { Button } from './Button'

const Subscribe = () => {
    return (
        <FormContainer>
            <FormContent>
                <h1>Prueba cuanto antes Vikkel App beta</h1>
                <p>Suscríbete y se el primero en rodar con nosotros, te notificaremos cuando Vikkel esté listo para ti.</p>
                <form action="#">
                    <FormWrap>
                        <h3>Suscríbete para obtener nuestra Aplicación Beta</h3>
                        <label htmlFor="Nombres">
                            <input type='text' placeholder='Nombre(s)' id='name' />
                        </label>
                        <label htmlFor='Apellidos'>
                            <input type='text' placeholder='Apellidos' id='lasname' />
                        </label>
                        <label>
                            <input type= 'email' placeholder= 'Email' id= 'email'/>
                        </label>
                        <Button>Subscribete</Button>
                    </FormWrap>
                </form>
            </FormContent>
        </FormContainer>
    )
}

export default Subscribe

const FormContainer = styled.div `
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.5) 0%, 
        rgba(0,0,0,0.5) 35%, 
        rgba(0,0,0,0.5) 100%,
        ), 
        url(${FormBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;


`
const FormContent = styled.div``
const FormWrap = styled.div``
