import React, { Component } from 'react';
import { Link } from 'react-router';

class Contacts extends Component {

    createListItem = (contact) => {
         return (
            <li key={contact.id}>
                <Link to={`/contacts/${contact.id}`}>
                    {contact.name}
                </Link>
            </li>
        );
    }

    render () {
        return(
            <div>
                <ul className='contactList'>
                    {this.props.contacts.map(this.createListItem)}
                </ul>
                <Link to='/NewContact'>Go to NewContact</Link>
            </div>
        )
    }
}

export default Contacts;