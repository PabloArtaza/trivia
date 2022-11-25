import React from "react";

import { Title } from "./elements/Title";
import { Texts } from "./elements/Texts";
import image from '../assets/img/copa.png'
import styled from "styled-components";
import Container from "./elements/Container";
import { PrimaryButton } from "./elements/Buttons";
import { Row } from "./elements/Rows";
import { Link } from "react-router-dom";

const RowsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    div{
       flex: 1;
    }
    img{
        max-width: 200px; 
    }
    @media screen and (max-width:768px){

    img{
        max-width: 60px; 
    }
    }
    @media screen and (min-width:768px) and (max-width:992px) {
    img{
        max-width: 70px; 
    }
    
    }
`;

const Home =({className}) => {
    return(
        <div className={className}>
         <Container  >
            <RowsContainer>
                <div>
                    <Title >Bienvenidos a la Trivia Mundial de GRUPO PETRO</Title>
                    <Texts> Participa por una camiseta de la SCALONETA</Texts>
                    <Row>
                         <Link to="registro"><PrimaryButton>Registrate</PrimaryButton> </Link>  
                    </Row>
                </div>
                <img src={image} alt="" />
            </RowsContainer>
        </Container>
        </div>    
    );
}
export default styled(Home)`
    background-color: #14213d;
    color: #fff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;   
    a{
     text-decoration: none;
    }
`;
