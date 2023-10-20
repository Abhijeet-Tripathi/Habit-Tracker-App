import { ADD_HABIT } from "./modalAction";

const initialState = {
    habitArray: [],
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HABIT://to add habit to habitArray
      return {
        ...state,
        habitArray: [...state.habitArray, { habitName: action.payload.habitName }],
      };
    default:
      return state;
  }
}

export default modalReducer;

  