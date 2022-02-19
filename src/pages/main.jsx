import React from 'react'
import {
  Stack
} from '@mui/material'
import QuizCard, { AddNew } from 'components/QuizCard/QuizCard'

function Main() {
  return (
    <Stack direction="row" justifyContent="center" flexWrap="wrap">
      <AddNew />
      <QuizCard mini />
      <QuizCard mini />
      <QuizCard mini />
      <QuizCard mini />
      <QuizCard mini />
      <QuizCard mini />
    </Stack>
  )
}

export default Main