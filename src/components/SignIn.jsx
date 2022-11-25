import React, { useState } from 'react'
//import { Formik, Form, Field } from 'formik'
import styled from 'styled-components';
import { PrimaryButton } from './elements/Buttons';
import { useNavigate } from 'react-router-dom';
import Container from './elements/Container';


import "firebase/firestore";
import {db} from '../firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';
import { async } from '@firebase/util';

 
export const SignIN =({className}) => {
    const [nombre, setNombre] = useState("")
    const [ apellido, setApellido] = useState("")
    const [ email, setEmail] = useState("")
    const navigate = useNavigate()

    const userCollection = collection(db, "users")

    const user = async (e) => {
        e.preventDefault()
       await addDoc( userCollection, { nombre: nombre, apellido: apellido, email: email});
        navigate('/trivia');
    }

 return(
    <div className={className}>
        <Container>
            <form onSubmit={user}>
                <div style={{margin: "1rem"}}>
                    <label htmlFor="">Nombre</label>
                    <input  value={nombre}
                            onChange={(e)=> setNombre(e.target.value)}
                            type="text" />
                </div>
                <div style={{margin: "1rem"}}>
                    <label htmlFor="">Apellido</label>
                    <input  value={apellido}
                            onChange={(e)=> setApellido(e.target.value)}
                            type="text" />
                </div>
                <div style={{margin: "1rem"}}>
                    <label htmlFor="">    Email</label>
                    <input  value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            type="email"
                            />
                </div> 
                <PrimaryButton type='submit'> comenzar</PrimaryButton>     
            </form>
        </Container>
    </div>
 )
 }

export default styled(SignIN)`
    background-color: #14213d;
    color: #fff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
`;


/*
FORMIK
El componente Formik espera un funcion dentro porque el componente nos devuelve un objeto. 
El obj contiene las mismas propiedades, funciones o metodos que useFormik*/

/*
FORM
Devuelve una etiqueta form con todos los props de Formik(
    handleSubmit
    handleReset
)
*/
/*
 return (
    <div className={className}>
        <Container>
            <Formik 
            initialValues={{ email: "", name: "", apellido: ""}}
            onSubmit={(e) => handleSubmit={e}}
       
            >
            {(formData) => (
                    <Form>
                        <div style={{margin: "1rem"}}>
                            <label htmlFor="nombre">Nombre</label>
                            <Field id="nombre" name="nombre" type="text"/>
                        </div>
                        <div style={{margin: "1rem"}}>
                            <label htmlFor="apellido">Apellido</label>
                            <Field id="apellido" name="apellido" type="text" />
                        </div>
                        <div style={{margin: "1rem"}}>
                            <label htmlFor="email">   Email</label>
                            <Field id="email" name="email" type="email"/>
                        </div>
                            <PrimaryButton type='submit'>    
                            comenzar
                            </PrimaryButton>
                    </Form>
            )}
            </Formik>
        </Container>
    </div>
  )
}
*/ 
 