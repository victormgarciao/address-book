// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactProfile from '../../../components/organisms/contactProfile';
// import { a_addContact } from '../../../actions/contacts';

const mapStateToProps = (state) => ({
    // contacts: state.contactState.contacts,
})

const mapDispatchToProps = (dispatch) => ({ 
    // addContact: bindActionCreators(a_addContact, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfile);