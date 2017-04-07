import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Control, Form } from 'react-redux-form';

const displayName = 'ContactProfile'

const ContactProfile = (props) => {
    
    const {
        contactId,
    } = props.routeParams;
    const {
      updateContact
    } = props;

    return (
        <div  className={displayName}> 
          <Form 
              model='contact'
              onSubmit={(contact) => updateContact(contactId, contact)}
          >
              <label>First Name:</label>
              <Control.text model='.firstname' />

              <label>Last Name:</label>
              <Control.text model='.lastname' />

              <label>Email:</label>
              <Control.text
                  type='email'
                  model='.email' 
              />
              
              <label>Country:</label>
              <Control.text model='.country' />

              <button type='submit'>
                  Update contact
              </button>
          </Form>
          <Link to={'/'}>
              'Go back to contacts'
          </Link>
        </div>
    );
}

ContactProfile.defaultProps = {
}
ContactProfile.propTypes = {
    updateContact: PropTypes.func.isRequired,
}

export default ContactProfile;