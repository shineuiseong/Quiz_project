//퀴즈를 풀면 정답 -> 점수 획득
//오답인 경우 -> 점수 획득이 없음

import { statement } from '@babel/template'

//상태 => 사용자의 현재점수 (score)
//액션 =>   정답인지 아닌지 판별 , 정답 => 점수 ++

// 위에 방식대로가 아니라 이런방법도있음
// 상태: 사용자가 응답한 정답목록 []  , 액션: 정답목록에 하나하나 추가

//액션 타입(문자열)
const CHECK_CORRECT = 'score/CHECK_CORRECT'
const NEXT_PAGE = 'score/NEXT_PAGE'
const RESET = 'score/RESET'
//액션 생성 함수
// index -> 문제번호 , answer 누군지
export function check({ quizIndex, answerIndex }) {
  return {
    type: CHECK_CORRECT,
    payload: { quizIndex, answerIndex },
    quizs: [
      {
        q: '대한민국의 수도는?',
        a: [
          {
            text: '서울',
            isCorrect: true,
          },
          {
            text: '대전',
            isCorrect: false,
          },
          {
            text: '대전',
            isCorrect: false,
          },
        ],
      },
    ],
  }
}

export function next() {
  return {
    type: NEXT_PAGE,
  }
}

export function reset() {
  return {
    type: RESET,
  }
}

// 초기상태
const initialState = {
  score: 0,
  page: 0, // 0:인트로페이지, 1~quizs.length : 퀴즈페이지, quizs.length+1 : 마지막 페이지
}

export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: state.quizs[action.payload.quizIndex].isCorrect ? score + 10 : state.score,
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      }
    default:
      return state
  }
}
