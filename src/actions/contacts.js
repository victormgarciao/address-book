export const actionsTypes = {
    ADD_CONTACT : 'ADD_CONTACT',
    DELETE_CONTACT : 'DELETE_CONTACT',
    UPDATE_CONTACT : 'UPDATE_CONTACT'
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

export const a_updateContact = (contactId, contactUpdated) => {
    return {
        type: actionsTypes.UPDATE_CONTACT,
        contactId,
        contactUpdated
    }
}