import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Control, Form } from 'react-redux-form';

const displayName = 'NewContact';

const NewContact = (props) => {
    const {
        addContact
    } = props;

    return(
        <div className={displayName}>
            <Form 
                model='contact'
                onSubmit={(contact) => addContact(contact)}
            >
                <label>First Name:</label>
                <Control.text model='contact.firstname' />

                <label>Last Name:</label>
                <Control.text model='contact.lastname' />

                <label>Email:</label>
                <Control.text
                    type='email'
                    model='contact.email' 
                />
                
                <label>Country:</label>
                <Control.text model='contact.country' />

                <button type='submit'>
                    Add contact
                </button>
            </Form>
            <Link to='/'>Go to contacts</Link>
        </div>
    )
}

NewContact.defaultProps = {
}
NewContact.propTypes = {
    contact: PropTypes.object,
    addContact: PropTypes.func.isRequired
}

export default NewContact;