import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import contactsReducer from './contacts';
import contactReducer from './contact';

const reducers = combineReducers({
  contactsState: contactsReducer,
  ...createForms({
    contactState: contactReducer
  })
});

export default reducers;