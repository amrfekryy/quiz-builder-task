import * as React from 'react';
import {
  CssBaseline,
  Container
} from '@mui/material'
import QuizCard from 'components/QuizCard/QuizCard'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 5, bgcolor: '#E4E8F5', height: '100vh' }}>
        <QuizCard />
      </Container>
    </div>
  );
}

export default App;
