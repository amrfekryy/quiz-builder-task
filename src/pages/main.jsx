import React from 'react'
import {
  Stack
} from '@mui/material'
import QuizCard, { AddNew } from 'components/QuizCard/QuizCard'
import { useSelector } from 'react-redux'

function Main() {
  const quizes = useSelector(state => state.quizes)

  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap">
      <AddNew />
      {Object.values(quizes).map(quiz => <QuizCard mini quiz={quiz}/>)}
    </Stack>
  )
}

export default Main