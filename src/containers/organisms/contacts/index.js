import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contacts from '../../../components/organisms/contacts';
import {
    getContacts,
    deleteContact,
} from '../../../api/contacts-api';
//TODO
//import store from '../../../store/store';
// import { loadSearchLayout } from '../../actions/search-layout-actions';

class ContactsContainer extends Component {


    componentDidMount = () =>{
        getContacts();
        // TODO
        // store.dispatch(
        //     store.dispatch(loadSearchLayout('contacts', 'Contact Results'));
        // )
    }

    render() {
        const {
            contacts,
        } = this.props;

        return(
            <Contacts 
                contacts={contacts}
                deleteContact={deleteContact}
            />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        contacts: store.contactState.contacts
    }
}

export default connect(mapStateToProps)(ContactsContainer);