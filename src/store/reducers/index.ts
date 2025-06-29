import { combineReducers } from 'redux';

// Placeholder reducer
const notesReducer = (state = [], action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;
