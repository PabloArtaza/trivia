import styled from "styled-components";

export const Texts = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0%;
    text-transform: uppercase;
    color: darkgoldenrod;
    @media screen and (max-width:768px){
        font-size: 0.5rem;
    }
    @media screen and (min-width:768px) and (max-width:992px) {
        font-size: 0.5rem;
    }
`;