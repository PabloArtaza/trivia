import styled, {css} from "styled-components"

export const Span = css`
    font-weight: bold;
    display: flex;
    @media screen and (max-width:768px){
      font-size: 0.6rem;
    }
    @media screen and (min-width:768px) and (max-width:992px) {
        font-size: 0.5rem;
    }
`;

export const SpanNumberQuestion = styled.span`
    ${ Span }
    font-size: 1.2rem;
    color: white;

`;

export const SpanTime = styled.span`
    ${ Span }
    font-size: 0.8rem;
    color: #f2cc35;
`;
export const SpanResult = styled.span`
    ${ Span }
    display: flex;
    justify-content: center;
    font-size: 1rem;
    color: #ffffff;
   
`;