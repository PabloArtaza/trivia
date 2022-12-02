import styled from 'styled-components'
import {SpanNumberQuestion, SpanResult, SpanTime} from './elements/Span'
import preguntas from '../preguntas'
import { useState, useEffect } from "react";
import { ButtonResults } from './elements/Buttons';
import {Column} from './elements/Column'
import {Questions} from './elements/Questions'
import  Container  from './elements/Container';

const Trivia = ({className}) => {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);


  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta
    console.log(puntuación)
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(15);
      }
    }, 1200);
  }
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1200);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className={className}> 
        <div className="juego-terminado">
          <SpanResult>
            {" "}
            Obtuviste {puntuación} de {preguntas.length}{" "}
          </SpanResult>
          <ButtonResults onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </ButtonResults>
          <ButtonResults
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </ButtonResults>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className={className}>
        <Column>
            <SpanNumberQuestion> 
            Pregunta {preguntaActual + 1} de {preguntas.length}
            </SpanNumberQuestion>
            <Questions>
               {preguntas[preguntaActual].titulo}
            </Questions>
                {//respuestas correctas.
                  preguntas[preguntaActual].opciones.filter(
                    (opcion) => opcion.isCorrect
                  )[0].textoRespuesta
                }
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
          </Column>
      </main>
      
    );

  return (
    <main className={className}>
      <Container>
        <Column className="lado-izquierdo">
            <SpanNumberQuestion>
               Pregunta {preguntaActual +1} de {preguntas.length}
            </SpanNumberQuestion>
            <Questions className="titulo-pregunta">
             {preguntas[preguntaActual].titulo}
            </Questions>
            <div>
              {!areDisabled ? (
                 <SpanTime> Tiempo restante: {tiempoRestante}{" "} </SpanTime>) : (
                 <ButtonResults   
                 onClick={() => {
                 setTiempoRestante(10);
                 setAreDisabled(false);
                 if (preguntaActual === preguntas.length - 1) {
                   setIsFinished(true);
                 } else {
                   setPreguntaActual(preguntaActual + 1); 
                 }
                 }}>CONTINUAR
                 </ButtonResults>)}
             </div>
        </Column>
      </Container>
      <Column className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}  >
            {respuesta.textoRespuesta}
          </button>
        ))}
    </Column>
  </main>
  );
  
}

export default styled(Trivia)`
    background-color: #14213d;
    color: #fff;
    min-height: 90vh;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
      display: flow-root;
     padding: 130px;
     min-width: fit-content;
    }
    @media screen and (min-width:768px) and (max-width:992px) {
      display: flow-root;
      padding: 130px;
    }
`;