import React from 'react'
import {
  Button,
  Stack
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import * as UIActions from 'store/UI.slice'
import { submitQuiz } from 'store/quizesReducer.slice'
import QuizForm from 'components/QuizForm/QuizForm'
import QuizCard from 'components/QuizCard/QuizCard'
import QuestionForm from 'components/QuestionForm/QuestionForm'
import QuestionCard from 'components/QuestionCard/QuestionCard'

function Quiz() {

  const dispatch = useDispatch()
  const { action, quiz = {}, showQuiz, editing } = useSelector(state => state.UI)
  const { questions_answers } = quiz

  return (
    <>
      {editing === 'quizMeta' ? <QuizForm /> : <QuizCard />}
      {questions_answers.map((question, questionIdx) => {
        const Component = editing === question.id ? QuestionForm : QuestionCard
        return <Component key={question.id} question={question} questionIdx={questionIdx} />
      })}
      <Stack sx={{ m: 2 }}>
        <Button disabled={!!editing} onClick={() => dispatch(UIActions.addQuestion())}>
          Add Question
        </Button>
        <Button disabled={!!editing} onClick={() => {
          dispatch(submitQuiz(quiz))
          dispatch(UIActions.resetUI())
        }}>
          Save Quiz
        </Button>
      </Stack>
    </>
  )
}

export default Quiz