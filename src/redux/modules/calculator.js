// aciton value
const PLUS_N = "PLUS_N";
const MINUS_N = "MINUS_N";
const TOTAL_N = "TOTAL_N";

// action creator
export const plusN = (number) => {
  return {
    type: PLUS_N,
    payload: number,
  };
};
export const minusN = (number) => {
  return {
    type: MINUS_N,
    payload: number,
  };
};
export const totalN = (number) => {
  return {
    type: TOTAL_N,
    payload: number,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
  plusNumber: 0,
  minusNumber: 0,
  totalNumber: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  console.log("action.payload", action.payload);
  console.log(state.plusNumber + action.payload);
  switch (action.type) {
    case PLUS_N:
      return {
        ...state,
        plusNumber: state.plusNumber + action.payload,
      };
    case MINUS_N:
      return {
        ...state,
        minusNumber: state.minusNumber - action.payload,
      };
    case TOTAL_N:
      console.log(state.totalNumber);
      return {
        ...state,
        totalNumber: state.plusNumber + state.minusNumber,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
