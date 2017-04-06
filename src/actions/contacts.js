export const actionsTypes = {
    ADD_CONTACTS : 'ADD_CONTACTS',
    DELETE_CONTACT : 'DELETE_CONTACT',
    CONTACT_PROFILE : 'CONTACT_PROFILE'
}

export const a_addContact = (contact) => {
    return {
        type: actionsTypes.ADD_CONTACT,
        contact
    }
}

export const a_deleteContact = (contactId) => {
    return {
        type: actionsTypes.DELETE_CONTACT,
        contactId
    }
}

export const a_contactProfile = (contactId) => {
    return {
        type: actionsTypes.CONTACT_PROFILE,
        contactId
    }
}