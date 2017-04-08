import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactProfile from '../../../components/organisms/contactProfile';
import { a_updateContact } from '../../../actions/contacts';
import { actions } from 'react-redux-form';

const getContact = (contacts, contactId) => {
    return contacts.filter(contact => contact.id === contactId)
};

const initFormFields = (contact, reduxFormActions) => {
    reduxFormActions.reset('contact');
    reduxFormActions.change('contact.firstname', contact.firstname);
    reduxFormActions.change('contact.lastname', contact.lastname);
    reduxFormActions.change('contact.email', contact.email);
    reduxFormActions.change('contact.country', contact.country);
}

const ContactProfileContainer = (props) => {

    const {
        contact,
        reduxFormActions
    } = props;

    initFormFields(contact, reduxFormActions);

    return <ContactProfile {...props}/>;
}

const mapStateToProps = (state, props) => ({
    contact: getContact(
        state.contactState.contacts,
        props.params.contactId
    )[0],
    contactId: props.params.contactId,
})

const mapDispatchToProps = (dispatch) => ({ 
    updateContact: bindActionCreators(a_updateContact, dispatch),
    reduxFormActions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactProfileContainer);