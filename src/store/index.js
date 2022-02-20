import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './UI.slice'
import quizesReducer from './quizesReducer.slice'


const store = configureStore({
  reducer: {
    UI: UIReducer,
    quizes: quizesReducer
  },
});

export default store;
