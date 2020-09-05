// const initialState = {
//   isInputPage: true,
//   isLoading: false,
//   error: null,
//   result: [],
// }

const initialState = {
  isInputPage: true,
  text: "",
  isLoading: false,
  error: null,
  result: [],
}

export const stateReducer = (state = initialState, action) => {

  switch(action.type) {

    case "SET_IS_LOADING":
      return {
        ...state,
        isInputPage: false,
        text: action.payload,
        isLoading: true,
        error: null,
        result: [],
      }

    case "SET_ERROR": 
      return {
        ...state,
        isLoading: false,
        error: {
          ...action.payload,
        },
        result: [],
      }

    case "SET_RESULT":
      return {
        ...state,
        isLoading: false,
        error: null,
        result: [
          ...action.payload
        ],
      }
      
    default: 
      return state;
  }

}