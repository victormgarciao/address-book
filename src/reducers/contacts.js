import { actionsTypes } from '../actions/contacts';
import filter from 'lodash/filter';
import uniqid from 'uniqid';
import concat from 'lodash/concat';

const initialState = {
    contacts: [],
}

const contactReducer = (state = initialState, action) => {
    let newContacts = [];
    switch(action.type) {

        case actionsTypes.ADD_CONTACT:
            const newContact = {...action.contact, id: uniqid()}
            newContacts = concat(state.contacts, newContact);
            return {...state, contacts: newContacts};

        case actionsTypes.DELETE_CONTACT_SUCCESS:
            newContacts = filter(state.contacts, contact => {
                return contact.id !== action.contactId
            });
            return {...state, contacts: newContacts};
        
        default:
            return state;
    }
}

export default contactReducer;