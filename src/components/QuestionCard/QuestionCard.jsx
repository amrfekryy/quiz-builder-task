import * as React from 'react';
import {
  Stack,
  Typography,
  Paper,
  Box
} from '@mui/material'
import MyIcon from 'components/MyIcon/MyIcon'
import { useDispatch, useSelector } from 'react-redux';
import * as UIActions from 'store/UI.slice'

function Feedbck({ title, feedback }) {
  return (
    <>
      {feedback && <Box sx={{ my: 1 }}>
        <Typography variant="subtitle2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {feedback}
        </Typography>
      </Box>}
    </>
  )
}

export default function QuestionCard({ question }) {

  const dispatch = useDispatch()
  const { editing } = useSelector(state => state.UI)
  const { text, feedback_false, feedback_true, answers = [] } = question

  return (
    <Paper elevation={0} sx={{ p: 2, m: 2 }}>

      <Stack direction="row" alignItems="center">
        <Typography variant="button" component="div">
          {text}
        </Typography>
        <Stack direction="row" flex={1} justifyContent="flex-end" spacing={1}>
          {!editing && <MyIcon icon='edit' tooltip="edit" fontSize="small"
            onClick={() => dispatch(UIActions.editQuestion(question.id))}
          />}
        </Stack>
      </Stack>

      {answers.map(answer => {
        const { text, is_true } = answer

        return <Stack key={answer.id} direction="row" alignItems="center" spacing={1} sx={{ my: 0.5 }}>
          <MyIcon icon={is_true ? "check_circle" : "radio_button_unchecked"}
            sx={{
              color: 'success.main', fontSize: 17,
              ':hover': { color: 'success.main' }
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </Stack>

      })}

      <Feedbck title="False Answer Feedback" feedback={feedback_false} />
      <Feedbck title="True Answer Feedback" feedback={feedback_true} />
    </Paper>
  );
}
