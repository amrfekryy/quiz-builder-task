import { configureStore } from '@reduxjs/toolkit';
import quizesReducer from './UI.slice'

// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    quizes: quizesReducer
  },
  // middleware: [sagaMiddleware],
  devTools: true,
});

// sagaMiddleware.run(rootSaga);

export default store;
