import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contacts from '../../../components/organisms/contacts';
import { deleteContactSuccess} from '../../../actions/contacts';
// TODO
// import { loadSearchLayout } from '../../actions/search-layout-actions';

const mapStateToProps = (state) => ({
    contacts: state.contactState.contacts,
})

const mapDispatchToProps = (dispatch) => ({ 
    deleteContact: bindActionCreators(deleteContactSuccess, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
