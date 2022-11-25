import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    padding: 0;
    @media screen and (max-width:768px){
      font-size: 0.7rem;
    }
    @media screen and (min-width:768px) and (max-width:992px) {
        font-size: 0.7rem;
    }
    `;