
import styled, {css} from 'styled-components'

const ButtonStyle = css`
    display: block;
    padding: 0.5rem 1.1rem;
    border-radius: 12px;
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;
    border: 0;
    margin: 1.5em;
    :disabled{
        background-color: #555e7d;
    color: #ffffff;
    cursor: not-allowed;
    }
    :focus{
        outline: none;
    }
    cursor: pointer;
    @media screen and (max-width:768px){
        font-size: 0.5rem;
    }
    @media screen and (min-width:768px) and (max-width:992px) {
        font-size: 0.5rem;
    }
 
 
`;

export const PrimaryButton = styled.button`
    ${ ButtonStyle }
    background-color: darkgoldenrod;
    color: white;  
    text-decoration: none;
`;

export const ButtonAnswers = styled.button`
    ${ ButtonStyle }
    background-color: darkgoldenrod;
    color: white; 
`;
export const ButtonResults = styled.button`
    ${ ButtonStyle }
    background-color: darkgoldenrod;
    color: white; 
    padding: 0px;
`;