import * as React from 'react';
import {
  CssBaseline,
  Container
} from '@mui/material'
import QuizCard from 'components/QuizCard/QuizCard'
import store from 'store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 5, bgcolor: '#E4E8F5', height: '100vh' }}>
        <QuizCard />
      </Container>
    </Provider>
  );
}

export default App;
