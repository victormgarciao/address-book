import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactProfile from '../../../components/organisms/contactProfile';
import { a_updateContact } from '../../../actions/contacts';
import { actions } from 'react-redux-form';

const getContact = (contacts, contactId) => contacts.filter(contact => contact.id === contactId);

const mapStateToProps = (state, props) => ({
    contact: getContact(state.contactState.contacts, props.params.contactId)[0],
    contactId: props.params.contactId,
})

const mapDispatchToProps = (dispatch) => ({ 
    updateContact: bindActionCreators(a_updateContact, dispatch),
    initFormField: bindActionCreators(actions.change, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);