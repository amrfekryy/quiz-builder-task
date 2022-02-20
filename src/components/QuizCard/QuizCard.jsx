import * as React from 'react';
import {
  Stack,
  Typography,
  Paper
} from '@mui/material'
import MyIcon from 'components/MyIcon/MyIcon'
import { useDispatch, useSelector } from 'react-redux';
import * as UIActions from 'store/UI.slice'

export function AddNew() {
  const dispatch = useDispatch()

  return (
    <Paper elevation={1}
      sx={{
        width: 250, m: 2, minHeight: 100,
        ':hover': { boxShadow: 5 }
      }}
      onClick={() => dispatch(UIActions.createQuiz())}
    >
      <Stack sx={{ height: '100%' }} justifyContent="center" alignItems="center">
        <MyIcon icon='add' tooltip="add quiz" fontSize="large" onClick={() => { }} />
      </Stack>
    </Paper>
  )
}

export default function QuizCard({ quiz: Quiz, mini = false }) {

  const dispatch = useDispatch()
  const { quiz = Quiz, editing } = useSelector(state => state.UI)
  const { title = '', description = '', url = '', questions_answers = [] } = quiz

  return (
    <Paper elevation={mini ? 1 : 0} sx={{ p: 2, m: 2, ...(mini && { width: 250 }) }}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Stack direction="row" flex={1} justifyContent="flex-end" spacing={1}>
          <MyIcon icon='ondemand_video' tooltip="watch video" fontSize="small"
            onClick={() => window.open(url, '_blank').focus()}
          />
          {!editing && <MyIcon icon='edit' tooltip="edit" fontSize="small"
            onClick={() => dispatch(Quiz ? UIActions.updateQuiz(Quiz) : UIActions.editQuizMeta())}
          />}
        </Stack>
      </Stack>
      <Typography variant="body1" sx={{ my: 1.5 }} color="text.secondary">
        {description}
      </Typography>
      {mini && <Typography variant="body2">
        {questions_answers.length} questions
      </Typography>}
    </Paper>
  );
}
