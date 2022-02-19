import React from 'react'
import {
  Stack
} from '@mui/material'
import { useSelector } from 'react-redux'
import QuizForm from 'components/QuizForm/QuizForm'
import QuizCard from 'components/QuizCard/QuizCard'
import QuestionForm from 'components/QuestionForm/QuestionForm'
function Quiz() {
  const { action, quiz, showQuiz } = useSelector(state => state.UI)

  return (
    <>
      {showQuiz ===  'card' ? <QuizCard /> : <QuizForm />}
      <QuestionForm />
    </>
  )
}

export default Quiz