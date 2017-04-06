import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const displayName = 'NewContact';

class NewContact extends Component {
    render () {
        return(
            <Link to="/">Go to contacts</Link>

            // INPUT NAME
            // INPUT LNAME
            // INPUT EMAIL
            // SELECT COUNTRY
            // BUTTON ADD CONTACT
            <div className={`${displayName}__controls`}>
                <button
                    onClick={
                        () => addContact(contact)
                    }
                    className={`${displayName}__add`}
                >
                    Add Contact
                </button>
            </div>
        )
    }
}

NewContact.defaultProps = {
}
NewContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default NewContact;