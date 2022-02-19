import * as React from 'react';
import {
  Stack,
  Typography,
  Paper,
  Box
} from '@mui/material'
import MyIcon from 'components/MyIcon/MyIcon'
import { useDispatch } from 'react-redux';
import * as UIActions from 'store/UI.slice'

function Feedbck() {
  return (
    <Box sx={{ my: 1 }}>
      <Typography variant="subtitle2">
        False Answer Feedback
      </Typography>
      <Typography variant="body2" color="text.secondary">
        False Answer Feedback
      </Typography>
    </Box>
  )
}

export default function QuizCard({ mini = false }) {
  const dispatch = useDispatch()

  return (
    <Paper elevation={0} sx={{ p: 2, m: 2 }}>
      <Stack direction="row" alignItems="center">
        <Typography variant="button" component="div">
          Question
        </Typography>
        <Stack direction="row" flex={1} justifyContent="flex-end" spacing={1}>
          <MyIcon icon='edit' tooltip="edit question" fontSize="small" onClick={() => { }} />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 0.5 }}>
        <MyIcon icon="check_circle"
          sx={{
            color: 'success.main', fontSize: 15,
            ':hover': { color: 'success.main' }
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Answer1
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 0.5 }}>
        <MyIcon icon="radio_button_unchecked"
          sx={{
            color: 'success.main', fontSize: 15,
            ':hover': { color: 'success.main' }
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Answer1
        </Typography>
      </Stack>
      <Feedbck/>
      <Feedbck/>
    </Paper>
  );
}
