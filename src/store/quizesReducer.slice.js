import { createAction, createReducer } from '@reduxjs/toolkit';

export const submitQuiz = createAction('quizes/submitQuiz')

const initialState = {};

export default createReducer(initialState, {

  [submitQuiz]: (state, { payload: quiz }) => {
    return { ...state, [quiz.id]: quiz }
  }

});
