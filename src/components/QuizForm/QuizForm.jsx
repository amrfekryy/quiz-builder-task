import React from 'react'
import {
  Paper,
  Stack,
  TextField,
  Button
} from '@mui/material'
import { useFormik } from 'formik'


const fields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'description', label: 'Description', multiline: true },
  { name: 'url', label: 'Video URL' },
]

function QuizForm() {

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      title: '',
      description: '',
      url: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Stack spacing={2}>
        {
          fields.map(field => {
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
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Stack>
    </Paper>
  )
}

export default QuizForm