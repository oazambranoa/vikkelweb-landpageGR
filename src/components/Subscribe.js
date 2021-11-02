import React from 'react'
import styled from 'styled-components'
import FormBg from '../assets/images/vikkel/bicis.jpg'
import { Component } from 'react'
import { Button } from './Button'
import { getFirebase } from '../utils/firebaselogin'

import firebase from '@firebase/app';
// import getFirestore from "@firebase/firestore"
// import { initializeApp } from "firebase/app"
import getFirestore from '@firebase/firestore';

const firebaseApp = getFirebase(firebase)
const firestore = firebaseApp.firestore();

class Subscribe extends Component {
    constructor (props){
        super(props);
        this.state = {
            names: "",
            lastname: "",
            email: "",
            terms: " ",
        };
    }

    handleInputChange = event =>{
        this.setState({ [event.target.id]: event.target.value }); 
    }


    handleClick () {
        this.setState({value: ' '})
        var event = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(event);
      }

    handleSubmit = event => {
        event.preventDefault()

        // database connection to cloud firestore 
        const db = firestore;

        // create a table(collection) called 'users' in cloud firestore in order to store info
        db.collection('suscriptores').add({
            names: this.state.names,
            lastname: this.state.lastname,
            email: this.state.email,
            terms: Date(),
        });  

        this.setState({
            names: "",
            lastname: "",
            email: "",
            terms: " ",
        });
        alert("Tu solicitud se ha enviado con exito")
    };

    render() {
        // const { submit } = this.state;

        return (
            <FormContainer>
                <FormContent>
                    <h1 id="suscribete">Prueba cuanto antes Vikkel App beta</h1>
                    <p>Suscríbete y se el primero en rodar con nosotros, te notificaremos cuando Vikkel esté listo para ti.</p>
                    <form onSubmit={this.handleSubmit}>
                        <FormWrap>
                            <h3>Suscríbete para obtener nuestra Aplicación Beta</h3>
                            <label htmlFor="Nombres">
                                <input required type='text' value={this.state.names} onChange={this.handleInputChange} placeholder='Nombre(s)' id='names' />
                            </label> <br/>
                            <label htmlFor='Apellidos'>
                                <input required type='text' value={this.state.lastname} onChange={this.handleInputChange} placeholder='Apellidos' id='lastname' />
                            </label><br/>
                            <label>
                                <input required type= 'email'  value={this.state.email} onChange={this.handleInputChange} placeholder= 'Email' id= 'email' />
                            </label><br/>
                            <Button as='button' type='submit' primary='true' round='true' css={`height: 48; margin-top: 10px;`} >Subscribete</Button>
                        </FormWrap>
                    </form>
                </FormContent>
            </FormContainer>
        )
    }

}

export default Subscribe

const FormContainer = styled.div `
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 36%,
        rgba(0, 0, 0, 0.1) 100%
        ),
        url(${FormBg}) no-repeat center;
    );
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem  calc((100vw- 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;


`
const FormContent = styled.div`
    display: grid;
    
    align-items: center;
    h1{
        text-align: center;
        margin-bottom: 1rem;
        padding: 0 1rem;
        margin-bottom: 2rm;
    }
    p{
        text-align: center;
    }
    form {
        z-index: 10;
    }

`
const FormWrap = styled.div`
    margin-top: 1rem;
    text-align: center;
    
    border-radius: 20px;
    padding-top: 1rem;
    padding-bottom: 1rem;

    h3{
        text-align: center;
    }

    input{
        padding: 1 rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 10px;
        border: none;
        margin-right: 0 rem;
        margin-top: 10px;

    }
    input{
        border: 5px white solid;
    
    }

`
