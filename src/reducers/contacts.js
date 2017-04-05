import { actionsTypes } from '../actions/contacts';
import filter from 'lodash/filter';

const initialState = {
    contacts: [],
    contactProfile: {
        repos: []
    }
}

const contactReducer = (state = initialState, action) => {
    switch(action.type) {

        case actionsTypes.GET_CONTACTS_SUCCESS:
            return {...state, contacts: action.contacts};

        case actionsTypes.DELETE_CONTACT_SUCCESS:
            const newContacts = filter(state.contacts, contact => {
                return contact.id !== action.contactId
            });
            return {...state, contacts: newContacts};
        
        case actionsTypes.CONTACT_PROFILE_SUCCESS:
            return {...state, userProfile: action.userProfile};
        
        default:
            return state;
    }
}

export default contactReducer;