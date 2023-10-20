// Define action constants
export const ADD_HABIT = 'ADD_HABIT';

// Create action creators
export const addHabit = (habitName) => ({
  type: ADD_HABIT,
  payload: { habitName },
});