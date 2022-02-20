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
import { useDispatch, useSelector } from 'react-redux';
import * as UIActions from 'store/UI.slice'

const fields1 = [
  { name: 'text', label: 'Question', required: true },
]
const fields2 = [
  { name: 'feedback_false', label: 'Flase Answer Feedback', multiline: true },
  { name: 'feedback_true', label: 'True Answer Feedback', multiline: true },
]

function QuestionCard({ question, questionIdx }) {

  const dispatch = useDispatch()
  const { quiz = {} } = useSelector(state => state.UI)
  const { questions_answers = [] } = quiz
  const { text = "", feedback_false = "", feedback_true = "", answers = [] } = question


  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      text, feedback_false, feedback_true,
      ...answers.reduce((res, answer, answerIdx) => {
        return { ...res, [answer.id]: answer.text }
      }, {})
    },
    onSubmit: values => {

      const { text, feedback_false, feedback_true, ...answersText } = values
      // console.log('answersObj', answersObj)
      const payload = {
        questionIdx,
        question: {
          ...question,
          text, feedback_false, feedback_true,
          answers: answers.map(answer => {
            return { ...answer, text: answersText[answer.id] }
          })
        }
      }

      dispatch(UIActions.saveQuestion(payload))
    }
  });

  const isSubmitDisabled = () => {
    const { text, feedback_false, feedback_true, ...answersText } = values
    return !(text && answers.every(answer => answersText[answer.id]))
  }

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
          answers.map((answer, answerIdx) => {

            return (
              <Stack key={answer.id} direction="row" alignItems="center" spacing={1}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  name={answer.id}
                  label={`Answer ${answerIdx + 1}`}
                  required
                  multiline
                  onChange={handleChange}
                  value={values[answer.id]}
                />
                <MyIcon tooltip="mark as correct"
                  icon={answer.is_true ? "check_circle" : "radio_button_unchecked"}
                  sx={{
                    color: 'success.main', fontSize: 20,
                    // ':hover': { color: 'success.main' }
                  }}
                  onClick={() => dispatch(UIActions.markAnswerCorrect({ 
                    questionId: question.id, answerId: answer.id
                  }))}
                />
                {answers.length > 2 && <MyIcon icon="close" tooltip="delete" sx={{ fontSize: 20 }}
                  onClick={() => dispatch(UIActions.deleteAnswer({ 
                    questionId: question.id, answerId: answer.id
                  }))}
                />}

              </Stack>
            )

          })
        }
        <Stack direction="row" justifyContent="flex-start">
          <Button
            variant="outlined" size="small" startIcon={<AddIcon />}
            onClick={() => dispatch(UIActions.addAnswer(questionIdx))}
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
          onClick={handleSubmit}
          disabled={isSubmitDisabled()}
        >
          Save
        </Button>
      </Stack>
    </Paper>
  )
}

export default QuestionCard