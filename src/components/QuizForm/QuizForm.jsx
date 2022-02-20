import React from 'react'
import {
  Paper,
  Stack,
  TextField,
  Button
} from '@mui/material'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import * as UIActions from 'store/UI.slice'

const fields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'description', label: 'Description', multiline: true },
  { name: 'url', label: 'Video URL' },
]

function QuizForm() {

  const dispatch = useDispatch()
  const { quiz = {} } = useSelector(state => state.UI)
  const { title = '', description = '', url = '' } = quiz

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { title, description, url },
    onSubmit: values => dispatch(UIActions.saveQuizMeta(values))
  });

  return (
    <Paper elevation={0} sx={{ p: 2, m: 2 }}>
      <Stack spacing={2}>
        {
          fields.map((field, idx) => {
            return <TextField
              key={idx}
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
          onClick={handleSubmit}
          disabled={!values.title}
        >
          Save
        </Button>
      </Stack>
    </Paper>
  )
}

export default QuizForm