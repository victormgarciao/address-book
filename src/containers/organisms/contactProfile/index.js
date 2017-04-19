import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactProfile from '../../../components/organisms/contactProfile';
import { a_updateContact } from '../../../actions/contacts';
import { actions } from 'react-redux-form';

const getContact = (contacts, contactId) => {
  return (contacts.filter(contact => contact.id === contactId))[0];
};

const initContactState = (contact, reduxFormActions) => {
  reduxFormActions.reset('contactState');
  reduxFormActions.change('contactState.firstname', contact.firstname);
  reduxFormActions.change('contactState.lastname', contact.lastname);
  reduxFormActions.change('contactState.email', contact.email);
  reduxFormActions.change('contactState.country', contact.country);
  reduxFormActions.change('contactState.id', contact.id);
}

const ContactProfileContainer = (props) => {

  const {
    contact,
    reduxFormActions
  } = props;

  initContactState(contact, reduxFormActions);

  return <ContactProfile {...props}/>;
}

const mapStateToProps = (state, props) => ({
  contact: getContact(
    state.contactsState.contacts,
    props.params.contactId
  ),
  contactId: props.params.contactId,
})

const mapDispatchToProps = (dispatch) => ({ 
  updateContact: bindActionCreators(a_updateContact, dispatch),
  reduxFormActions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactProfileContainer);