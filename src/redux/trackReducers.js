import { TOGGLE_DONE,TOGGLE_NOT_DONE } from "./trackAction";
const initialState={//our Initial state of track component
    habitDays:0,
    done:Array(7).fill(true),
    notdone:Array(7).fill(true),
  }
  
  export function trackReducer(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_DONE://This action will handle toggle of done button
        if (action.payload.index < new Date().getDay()) {//this condition will only allow user to toggle current and Previous days

          const updatedDone = [...state.done];//copied state
          updatedDone[action.payload.index] = !updatedDone[action.payload.index];//then reversed the value
  
          const updatedNotDone = [...state.notdone];//now we are copying notdone btn values
          updatedNotDone[action.payload.index] = true;// if notdone btn was clicked before, this will set it to unclicked
          //below we are incremting on click of done and vice-versa
          const habitDays = state.habitDays + (action.payload.str === 'inc' ? 1 : action.payload.str === 'dec' ? -1 : 0);
          return { ...state, done: updatedDone, notdone: updatedNotDone, habitDays };//we are updating value here
        }
        return state;//returning state here
  
      case TOGGLE_NOT_DONE://This action will handle toggle of not-done button

      //this conditon executes for previous dates and done is clicked
        if (action.payload.index < new Date().getDay() && action.payload.doneStatus === false) {

          const updatedNotDone = [...state.notdone];//copying value of not done
          updatedNotDone[action.payload.index] = !updatedNotDone[action.payload.index];//reversing it
  
          const updatedDone = [...state.done];//copyig done state
          updatedDone[action.payload.index] = true;// unclicking done btn
  
          return { ...state, notdone: updatedNotDone, done: updatedDone, habitDays: state.habitDays - 1 };//updating values
        } 

         //this conditon executes for previous dates and done is not clicked
        else if (action.payload.index < new Date().getDay() && action.payload.doneStatus === true) {
 
          const updatedNotDone = [...state.notdone];//copying state(notdone)
          updatedNotDone[action.payload.index] = !updatedNotDone[action.payload.index];//reversing value
  
          return { ...state, notdone: updatedNotDone };//updating 
        }
        return state;//returning state
  
      default:
        return state;//returning state
    }
  }
