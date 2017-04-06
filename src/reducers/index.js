import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import contactReducer from './contacts';

const initialContact = {
    firstname: '',
    lastname: '',
    email: '',
    country: ''
}

const initialContactState = (state = initialContact) => {
    return state;
}

const reducers = combineReducers({
    contactState: contactReducer,
    ...createForms({
        contact: initialContactState
    })
});

export default reducers;