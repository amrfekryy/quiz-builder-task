import { v4 } from 'uuid';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const resetUI = createAction('UI/resetUI')

export const createQuiz = createAction('UI/createQuiz')
export const updateQuiz = createAction('UI/updateQuiz')

export const saveQuizMeta = createAction('UI/saveQuizMeta')
export const editQuizMeta = createAction('UI/editQuizMeta')

export const saveQuestion = createAction('UI/saveQuestionMeta')
export const addQuestion = createAction('UI/addQuestion')
export const editQuestion = createAction('UI/editQuestion')
export const deleteQuestion = createAction('UI/deleteQuestion')

export const addAnswer = createAction('UI/addAnswer')
export const editAnswer = createAction('UI/editAnswer')
export const deleteAnswer = createAction('UI/deleteAnswer')
export const markAnswerCorrect = createAction('UI/markAnswerCorrect')


const initialState = { action: 'read' };

const createNewAnswer = (data = {}) => ({
  id: v4(),
  is_true: false,
  text: "",
  ...data
})

const createNewQuestion = (data = {}) => ({
  id: v4(),
  text: "",
  feedback_false: "",
  feedback_true: "",
  answer_id: null,
  answers: [
    createNewAnswer({ is_true: true }),
    createNewAnswer()
  ],
  ...data
})

const createNewQuiz = (data = {}) => ({
  created: "",
  modified: "",
  id: v4(),
  title: "",
  description: "",
  score: null,
  url: "https://www.youtube.com/watch?v=e6EGQFJLl04",

  questions_answers: [createNewQuestion()],
  ...data
})

export default createReducer(initialState, {

  [resetUI]: () => ({ ...initialState }),

  [createQuiz]: (state, action) => {
    return {
      action: 'create',
      quiz: createNewQuiz()
    }
  },
  [updateQuiz]: (state, { payload: quiz }) => {
    return {
      action: 'update',
      quiz: {...quiz}
    }
  },
  [saveQuizMeta]: (state, { payload }) => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        ...payload 
      },
      showQuiz: 'card'
    }
  },
  [editQuizMeta]: (state, { payload }) => {
    return {
      ...state,
      showQuiz: 'form'
    }
  },

});
