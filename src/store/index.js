import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './UI.slice'
import quizesReducer from './quizesReducer.slice'

// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    UI: UIReducer,
    quizes: quizesReducer
  },
  // middleware: [sagaMiddleware],
  // devTools: true,
});

// sagaMiddleware.run(rootSaga);

export default store;
