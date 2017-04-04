import React, { Component } from 'react';
import Contacts from '../../../components/organisms/contacts';

class ContactsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {id:1, name:'Ryan', active:true},
                {id:2, name:'Michael', active:true},
                {id:3, name:'Dan', active:true},
            ]
        };
    }

    render () {
        return(
            <Contacts 
                contacts={this.state.contacts}
            />
        )
    }
}

export default ContactsContainer;