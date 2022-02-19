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

export default function QuizCard() {
  const dispatch = useDispatch()

  return (
    <Stack direction="row" flexWrap="wrap" >
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
      <Card sx={{ width: 250, m: 2 }}>
        <CardContent>
          <Stack direction="row" alignItems="center">
            <Typography variant="h6" component="div">
              Quiz Title
            </Typography>
            <Stack direction="row" flex={1} justifyContent="flex-end" spacing={1}>
              <MyIcon icon='ondemand_video' tooltip="watch video" fontSize="small" onClick={() => { }} />
              <MyIcon icon='edit' tooltip="edit quiz" fontSize="small" onClick={() => { }} />
            </Stack>
          </Stack>
          <Typography sx={{ mt: 1.5 }} color="text.secondary"
          // variant="body2"
          // align='center'
          >
            Descriptiondfds ffffffff fffffff fffffffff f fffffffffff ffffffffffffffffffffff
          </Typography>
          {/* <Typography variant="body2">
          fkjdsklfjdlkfjdsklfjdsklfjdlskfjlkdsjfldk
        </Typography> */}
        </CardContent>
        <CardActions>
          3 questions
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Stack>
  );
}
