import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contacts from '../../../components/organisms/contacts';
import { a_deleteContact } from '../../../actions/contacts';

const mapStateToProps = (state) => ({
    contacts: state.contactsState.contacts,
})

const mapDispatchToProps = (dispatch) => ({ 
    deleteContact: bindActionCreators(a_deleteContact, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);