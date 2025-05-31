import styled from "styled-components"

import Question from "./ui/Question"
import { expertQuestions, juniorQuestions, plenoQuestions, seniorQuestions } from "../data/questions"
import { useState } from "react";

const QuestionContainer = styled.div`
  width: 60%;
  margin: 10rem auto 6rem;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 1280px) {
    width: 77%;
    margin: 3rem auto 6rem;
  }

  @media (max-width: 884px) {
    width: 92%;
    padding: 0;
    margin: 9rem auto 6rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 2.6rem auto 2rem;
    padding: 0 22px;
  }
`;

export const LargeTitle = styled.h2`
  width: fit-content;
  margin-inline: auto;
  text-align: center;
  color: var(--dark-green);
  margin-bottom: 13px;
  font-size: 3rem;
  font-weight: bold;
  position: relative;

  & span {
    position: absolute;
    top: -40%;
    display: inline-block;
    animation: wave 9s infinite;
  }
  
  & div {
    position: absolute;
    top: 17%;
    right: -6%;
    font-size: .7rem;
    background: var(--light-blue);
    color: black;
    padding: .1rem .4rem;
    border-radius: 50%;
    animation: wave 2s infinite;

    @media (max-width: 480px) {
        top: 14%;
        right: -8%;
        font-size: .6rem;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(-8deg); }
    70% { transform: rotate(14deg); }
    80% { transform: rotate(-4deg); }
    90% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  @media (max-width: 1919px) {
    font-size: 2.4rem;
    margin-bottom: .4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
    line-height: 2rem;
  }
`;

const DescriptionTitle = styled.p`
    width: ${({ noWidth }) => noWidth === 'yes' ? '32rem' : '50rem'};
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--light-grey);
    text-align: center;
    margin: ${({ margin }) => margin === 'large' ? '2rem auto 4rem' : '1rem auto 2rem'};

    @media (max-width: 1919px){
        margin: 0 auto 2rem;
    }

    @media (max-width: 1280px) {
        width: ${({ noWidth }) => noWidth === 'yes' ? '32rem' : '45rem'};
        margin: 0 auto 2rem;
        font-size: 1.2rem;
    }
    
    @media (max-width: 884px) {
        width: ${({ noWidth }) => noWidth === 'yes' ? '16rem;' : ''};
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 18px auto 0;
        font-size: 1rem;
    }
`

const Modes = styled.div`
  display: flex;
  justify-content: center;
  gap: .6rem;
  margin: 3rem 0 3.6rem;
  background-color: black;
  width: fit-content;
  margin-inline: auto;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;

  p {
    font-size: 1rem;
    color: var(--dark-green);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: .3rem 0.5rem;
    border-radius: 5px;

    &:hover {
      color: var(--light-blue);
    }
  }
`

export default function Questions() {
  const [junior, setJunior] = useState(true)
  const [pleno, setPleno] = useState(false)
  const [senior, setSenior] = useState(false)
  const [expert, setExpert] = useState(false)

  console.log('Junior:', junior, 'Pleno:', pleno, 'Senior:', senior, 'Expert:', expert)

  function handleModeChange(mode) {
    setJunior(mode === 'junior');
    setPleno(mode === 'pleno');
    setSenior(mode === 'senior');
    setExpert(mode === 'expert');
  }

  let questions = []
  if (junior) questions = juniorQuestions
  else if (pleno) questions = plenoQuestions
  else if (senior) questions = seniorQuestions
  else if (expert) questions = expertQuestions

  return (
    <QuestionContainer>
      <LargeTitle>Perguntas Front End</LargeTitle>
      <DescriptionTitle margin="large">
        Aqui você encontra 120 respostas para as perguntas mais comuns sobre desenvolvimento Front End.
      </DescriptionTitle>

      <Modes>
        <p
          onClick={() => handleModeChange('junior')}
          style={{
            color: junior ? 'black' : 'white',
            backgroundColor: junior ? 'white' : 'transparent'
          }}
        >Junior</p>
        <p
          onClick={() => handleModeChange('pleno')}
          style={{
            color: pleno ? 'black' : 'white',
            backgroundColor: pleno ? 'white' : 'transparent'
          }}
        >Pleno</p>
        <p
          onClick={() => handleModeChange('senior')}
          style={{
            color: senior ? 'black' : 'white',
            backgroundColor: senior ? 'white' : 'transparent'
          }}
        >Senior</p>
        <p
          onClick={() => handleModeChange('expert')}
          style={{
            color: expert ? 'black' : 'white',
            backgroundColor: expert ? 'white' : 'transparent'
          }}
        >Expert</p>
      </Modes>

      {questions.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </QuestionContainer>
  );
}
