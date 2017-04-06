import { createStore } from 'redux';
import reducers from '../reducers';
import { loadState, saveState } from '../storage/localstorage';
import throttle from 'lodash/throttle';

// TODO: remove the localstorage.clear
localStorage.clear();
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