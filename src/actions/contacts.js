export const actionsTypes = {
    GET_CONTACTS_SUCCESS : 'GET_CONTACTS_SUCCESS',
    DELETE_CONTACT_SUCCESS : 'DELETE_CONTACT_SUCCESS',
    CONTACT_PROFILE_SUCCESS : 'CONTACT_PROFILE_SUCCESS'
}

export const getContactsSuccess = () => {
    return {
        type: actionsTypes.GET_CONTACTS_SUCCESS
    };
}

export const deleteContactSuccess = (contactId) => {
    return {
        type: actionsTypes.DELETE_CONTACT_SUCCESS,
        contactId
    }
}

export const contactProfileSuccess = (contactId) => {
    return {
        type: actionsTypes.CONTACT_PROFILE_SUCCESS,
        contactId
    }
}