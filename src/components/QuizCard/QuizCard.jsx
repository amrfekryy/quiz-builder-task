import * as React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Stack,
  Button,
  Typography,
  IconButton,
  Paper
} from '@mui/material'
import MyIcon from 'components/MyIcon/MyIcon'
import { useDispatch } from 'react-redux';
import * as UIActions from 'store/UI.slice'

export function AddNew() {
  const dispatch = useDispatch()

  return (
    <Paper elevation={1}
      sx={{
        width: 250, m: 2, bgcolor: 'transparent',
        '& :hover': { boxShadow: 2 }
      }}
      onClick={() => dispatch(UIActions.createQuiz())}
    >
      <Stack sx={{ height: '100%' }} justifyContent="center" alignItems="center">
        <MyIcon icon='add' tooltip="add quiz" fontSize="large" onClick={() => { }} />
      </Stack>
    </Paper>
  )
}

export default function QuizCard({ mini=false }) {
  const dispatch = useDispatch()

  return (
    <Paper elevation={mini? 1 : 0} sx={{ p: 2, m: 2, ...(mini && {width: 250})}}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6" component="div">
          Quiz Title
        </Typography>
        <Stack direction="row" flex={1} justifyContent="flex-end" spacing={1}>
          <MyIcon icon='ondemand_video' tooltip="watch video" fontSize="small" onClick={() => { }} />
          <MyIcon icon='edit' tooltip="edit quiz" fontSize="small" onClick={() => { }} />
        </Stack>
      </Stack>
      <Typography variant="body1" sx={{ my: 1.5 }} color="text.secondary">
        Descriptiondfds ffffffff fffffff fffffffff f fffffffffff ffffffffffffffffffffff
      </Typography>
      {mini && <Typography variant="body2">
        3 questions
      </Typography>}
    </Paper>
  );
}
