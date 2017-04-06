import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const displayName = 'Contacts'

const Contacts = (props) => {
    
    const {
        contacts,
        deleteContact,
    } = props;

    return (
        <div  className={displayName}> 
            <ul className={`${displayName}__list`}>
                {contacts.map((contact) => {

                    return (
                        <li
                            key={contact.id}
                            className={`${displayName}__listItem`}
                        >
                            <Link to={`/contacts/${contact.id}`}>
                                {contact.firstname}
                            </Link>
                            <div className={`${displayName}__controls`}>
                                <button
                                    onClick={
                                        () => deleteContact(contact.id)
                                    }
                                    className={`${displayName}__delete`}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Link to={'/newContact'}>
                Add Contact
            </Link>
        </div>
    );
}

Contacts.defaultProps = {
    contacts: []
}
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default Contacts;