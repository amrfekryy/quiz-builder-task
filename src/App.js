import * as React from 'react';
import {
  CssBaseline,
  Container
} from '@mui/material'
import QuizCard from 'components/QuizCard/QuizCard'
import QuizForm from 'components/QuizForm/QuizForm'
import QuestionForm from 'components/QuestionForm/QuestionForm'
import QuestionCard from 'components/QuestionCard/QuestionCard'
import store from 'store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 5, bgcolor: '#E4E8F5', height: '100vh' }}>
        {/* <QuizCard /> */}
        {/* <QuizForm /> */}
        {/* <QuestionCard /> */}
        <QuestionForm />
      </Container>
    </Provider>
  );
}

export default App;
