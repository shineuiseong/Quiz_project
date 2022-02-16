// 퀴즈를 풀면 정답 -> 점수 획득
// 오답 -> 점수 획득 X

// 상태: 사용자의 현재 점수(score)
// 액션: 정답인지 아닌지 판별, 정답 => 점수++;

// 액션 타입(문자열)
const CHECK_CORRECT = 'score/CHECK_CORRECT'
const NEXT_PAGE = 'score/NEXT_PAGE'
const RESET = 'score/RESET'

// 액션 생성 함수
export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
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

// 초기 상태
const initialState = {
  score: 0,
  page: 0, // 0: 인트로 페이지, 1 ~ quizs.length: 퀴즈 페이지, quizs.length + 1: 마지막 페이지
  quizs: [
    {
      q: '대한민국의 수도는?',
      img: '/city/korea.jpg',
      a: [
        {
          text: '서울',
          isCorrect: true,
        },
        {
          text: '인천',
          isCorrect: false,
        },
        {
          text: '부산',
          isCorrect: false,
        },
      ],
    },
    {
      q: '미국의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '샌프란시스코',
          isCorrect: false,
        },
        {
          text: '워싱턴 D.C',
          isCorrect: true,
        },
        {
          text: '뉴욕',
          isCorrect: false,
        },
      ],
    },
    {
      q: '가나의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '아부바',
          isCorrect: false,
        },
        {
          text: '아크라',
          isCorrect: true,
        },
        {
          text: '프리토리아',
          isCorrect: false,
        },
      ],
    },
    {
      q: '남아프리카공화국의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '로조',
          isCorrect: false,
        },
        {
          text: '오슬로',
          isCorrect: false,
        },
        {
          text: '프리토리아',
          isCorrect: true,
        },
      ],
    },
    {
      q: '독일의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '베를린',
          isCorrect: true,
        },
        {
          text: '마셜',
          isCorrect: true,
        },
        {
          text: '릴롱궤',
          isCorrect: false,
        },
      ],
    },
    {
      q: '모로코의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '바마코',
          isCorrect: false,
        },
        {
          text: '라바트',
          isCorrect: true,
        },
        {
          text: '마나마',
          isCorrect: false,
        },
      ],
    },
    {
      q: '미얀마의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '네피도',
          isCorrect: true,
        },
        {
          text: '말라위',
          isCorrect: true,
        },
        {
          text: '모나코',
          isCorrect: false,
        },
      ],
    },
    {
      q: '조지아의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '커피',
          isCorrect: false,
        },
        {
          text: '도쿄',
          isCorrect: false,
        },
        {
          text: '트빌리시',
          isCorrect: true,
        },
      ],
    },
    {
      q: '캐나다의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '산호세',
          isCorrect: false,
        },
        {
          text: '오타와',
          isCorrect: true,
        },
        {
          text: '나이로비',
          isCorrect: false,
        },
      ],
    },
    {
      q: '헝가리의 수도는?',
      img: '/city/us.jpg',
      a: [
        {
          text: '부다페스트',
          isCorrect: true,
        },
        {
          text: '헬싱키',
          isCorrect: false,
        },
        {
          text: '파리',
          isCorrect: false,
        },
      ],
    },
  ],
}

// 리듀서
export default function score(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 10 : state.score,
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
