import React from 'react'
import {
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
  Checkbox
} from '@mui/material'
import { useFormik } from 'formik'
import AddIcon from '@mui/icons-material/Add';
import MyIcon from 'components/MyIcon/MyIcon';

const fields1 = [
  { name: 'text', label: 'Question', required: true },
]
const fields2 = [
  { name: 'feedback_false', label: 'Flase Answer Feedback', multiline: true },
  { name: 'feedback_true', label: 'True Answer Feedback', multiline: true },
]

const answers = [
  { name: 'answer1', label: 'First Answer', required: true, multiline: true },
  { name: 'answer2', label: 'Another Answer', required: true, multiline: true },
]

function QuizCard() {

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      text: "",
      feedback_false: "",
      feedback_true: "",
      answer1: "",
      answer2: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Paper elevation={0} sx={{ p: 2, m: 2 }}>
      <Stack spacing={2}>
        {
          fields1.map(field => {
            return <TextField
              variant="outlined"
              size="small"
              {...field}
              onChange={handleChange}
              value={values[field.name]}
            />
          })
        }
      </Stack>
      <Typography variant="subtitle2" sx={{ my: 2 }}>
        Answers
      </Typography>
      <Stack spacing={2}>
        {
          answers.map(answer => {
            return (
              <Stack direction="row" alignItems="center" spacing={1}>
                {/* <Checkbox
                  size='small'
                // checked={checked}
                // onChange={handleChange}
                // inputProps={{ 'aria-label': 'controlled' }}
                /> */}
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  {...answer}
                  onChange={handleChange}
                  value={values[answer.name]}
                />
                <MyIcon icon="check_circle" tooltip="mark as correct"
                  sx={{
                    color: 'success.main', fontSize: 20,
                    // ':hover': { color: 'success.main' }
                  }}
                  onClick={() => { }}
                />
                <MyIcon icon="close" tooltip="delete" sx={{ fontSize: 20 }} />

              </Stack>
            )

          })
        }
        <Stack direction="row" justifyContent="flex-start">
          <Button
            variant="outlined" size="small" startIcon={<AddIcon />}
            onClick={() => { }}
          >
            Add Answer
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={2} sx={{ mt: 3 }}>
        {
          fields2.map(field => {
            return <TextField
              variant="outlined"
              size="small"
              {...field}
              onChange={handleChange}
              value={values[field.name]}
            />
          })
        }
      </Stack>
      <Stack direction="row" justifyContent="flex-end" mt={2}>
        <Button
          variant="contained" size="small"
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </Button>
      </Stack>
    </Paper>
  )
}

export default QuizCard