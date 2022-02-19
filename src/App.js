import * as React from 'react';
import {
  CssBaseline,
  Container
} from '@mui/material'

import { useSelector } from 'react-redux'
import Main from 'pages/main'
import Quiz from 'pages/quiz'

function App() {
  const { action } = useSelector(state => state.UI)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 5, bgcolor: '#E4E8F5', minHeight: '100vh' }}>
        {['create', 'update'].includes(action) ? <Quiz /> : <Main />}
      </Container>
    </>
  );
}

export default App;
