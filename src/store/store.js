import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import reducers from '../reducers';

const enhancer = compose(
    persistState(),
)

const initialState = {
    contactState: {}
}

const store = createStore(reducers, initialState, enhancer);
export default store;