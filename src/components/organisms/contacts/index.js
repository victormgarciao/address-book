import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ContactList from '../../molecules/ContactList';
import { theme } from '../../../themes/testTheme';

const displayName = 'Contacts'

const Contacts = (props) => {
    
  const {
    contacts,
    deleteContact,
  } = props;

  return (
    <div  className={displayName}> 
      <ContactList 
        theme={theme()}
        contacts={contacts}
        deleteContact={deleteContact}
      />

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