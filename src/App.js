import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PinkButton } from './components/PinkButton'
import { next, reset } from './store/modules/score'
import styled from 'styled-components'
import { Quiz } from './components/Quiz'

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
`
const Header = styled.h1`
  margin-bottom: 30px;
`

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #8a8e90;
  font-weight: 400;
`
const Img = styled.img`
  width: inherit;
  margin-bottom: 30px;
`

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
  margin-bottom: 30px;
`

function App() {
  const page = useSelector((state) => state.score.page)
  const quiz = useSelector((state) => state.score.quizs)
  const score = useSelector((state) => state.score.score)
  const dispatch = useDispatch()
  return (
    <>
      {page === 0 && (
        <Main>
          <Img src="/img/main.jpg" alt="수도꼭지" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>수도 고인물도 어렵다. 니가 맞출수 있을꺼 같아??</SubHeader>
          <PinkButton text="테스트 시작" clickEvent={() => dispatch(next())} />
        </Main>
      )}
      {page > 0 && page <= quiz.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quiz.length && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는??</Header>
          <Score>{score}</Score>
          <PinkButton text="다시 시작하기" clickEvent={() => dispatch(reset())}></PinkButton>
        </Main>
      )}
    </>
  )
}

export default App
