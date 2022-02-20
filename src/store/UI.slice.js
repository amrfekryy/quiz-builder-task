import { v4 } from 'uuid';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const resetUI = createAction('UI/resetUI')

export const createQuiz = createAction('UI/createQuiz')
export const updateQuiz = createAction('UI/updateQuiz')

export const saveQuizMeta = createAction('UI/saveQuizMeta')
export const editQuizMeta = createAction('UI/editQuizMeta')

export const saveQuestion = createAction('UI/saveQuestion')
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

  questions_answers: [],
  ...data
})

export default createReducer(initialState, {

  [resetUI]: () => ({ ...initialState }),

  [createQuiz]: (state, action) => {
    return {
      action: 'create',
      editing: 'quizMeta',
      quiz: createNewQuiz()
    }
  },
  [updateQuiz]: (state, { payload: quiz }) => {
    return {
      action: 'update',
      quiz: { ...quiz }
    }
  },
  [saveQuizMeta]: (state, { payload }) => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        ...payload
      },
      editing: ''
    }
  },
  [editQuizMeta]: (state, { payload }) => {
    return {
      ...state,
      editing: 'quizMeta'
    }
  },
  [addQuestion]: (state) => {
    const newQuestion = createNewQuestion()
    const questions_answers = [...state.quiz.questions_answers, newQuestion]

    return {
      ...state,
      quiz: {
        ...state.quiz,
        questions_answers
      },
      editing: newQuestion.id
    }
  },
  [editQuestion]: (state, { payload: questionId }) => {
    return {
      ...state,
      editing: questionId
    }
  },
  [saveQuestion]: (state, { payload: { question, questionIdx } }) => {
    const questions_answers = [...state.quiz.questions_answers]
    questions_answers[questionIdx] = question

    return {
      ...state,
      quiz: {
        ...state.quiz,
        questions_answers
      },
      editing: ''
    }
  },
  [addAnswer]: (state, { payload: questionIdx }) => {
    const newAnswer = createNewAnswer()
    const questions_answers = JSON.parse(JSON.stringify([...state.quiz.questions_answers]))
    questions_answers[questionIdx].answers = [...questions_answers[questionIdx]?.answers, newAnswer]

    return {
      ...state,
      quiz: { ...state.quiz, questions_answers }
    }
  },
  [deleteAnswer]: (state, { payload: { questionId, answerId } }) => {


    const questions_answers = state.quiz.questions_answers.map(question => {
      if (question.id !== questionId) return question

      let deletedCorrect = false
      let answers = question.answers.filter(answer => {
        if (answer.id === answerId && answer.is_true) deletedCorrect = true
        return answer.id !== answerId
      })

      if (deletedCorrect) answers = answers.map((answer, idx) => (idx === 0 ? { ...answer, is_true: true } : answer))

      return { ...question, answers }
    })

    return {
      ...state,
      quiz: { ...state.quiz, questions_answers }
    }
  },
  [markAnswerCorrect]: (state, { payload: { questionId, answerId } }) => {

    const questions_answers = state.quiz.questions_answers.map(question => {
      if (question.id !== questionId) return question

      return {
        ...question,
        answers: question.answers.map(answer => ({ ...answer, is_true: answer.id === answerId }))
      }
    })

    return {
      ...state,
      quiz: { ...state.quiz, questions_answers }
    }
  },

});
