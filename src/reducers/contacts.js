import { actionsTypes } from '../actions/contacts';
import filter from 'lodash/filter';

const initialState = {
    contacts: [
        {
            id: 1,
            firstname: 'Victor',
            lastname: 'Garcia',
            email: 'hola@hola.com',
            country: 'Spain'
        }
    ],
}

const contactReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionsTypes.DELETE_CONTACT_SUCCESS:
            const newContacts = filter(state.contacts, contact => {
                return contact.id !== action.contactId
            });
            return {...state, contacts: newContacts};
        
        default:
            return state;
    }
}

export default contactReducer;