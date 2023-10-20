
//Action constants
export const TOGGLE_DONE="TOGGLE_DONE";
export const TOGGLE_NOT_DONE="TOGGLE_NOT_DONE";

//Action Creators

export const toggleDone = (index, str) => {
    return {
      type: TOGGLE_DONE,
      payload: { index, str },
    };
  };
  
  export const toggleNotDone = (index, doneStatus) => {
    return {
      type: TOGGLE_NOT_DONE,
      payload: { index, doneStatus },
    };
  };

  
  
  
 