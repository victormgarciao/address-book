import { createStore } from 'redux';
import reducers from '../reducers';
import { loadState, saveState } from '../storage/localstorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(
    throttle(() => {
        saveState({
            contacts: store.getState().contacts
        });
    }, 1000)
);

export default store;