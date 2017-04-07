import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const displayName = 'ContactProfile'

const ContactProfile = (props) => {
    
    const {
        contactId,
    } = props.routeParams;

    return (
        <div  className={displayName}> 
          <span>{contactId}</span>
          <Link to={'/'}>
              'Go back to contacts'
          </Link>
        </div>
    );
}

ContactProfile.defaultProps = {
}
ContactProfile.propTypes = {
    contactId: PropTypes.array.string,
}

export default ContactProfile;