import { combineReducers } from 'redux';

import contactReducer from './contacts';

const reducers = combineReducers({
    contactState: contactReducer,
});

export default reducers;