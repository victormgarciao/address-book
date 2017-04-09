import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ContactList from '../../molecules/ContactList';
import { theme } from '../../../themes/testTheme';

const displayName = 'Contacts'

const computeStyles = () => {
  return {
    root: {
      base: {
        padding: 30,
      }
    }
  }
}

const Contacts = (props) => {
  const styles = computeStyles();
  const {
    contacts,
    deleteContact,
  } = props;

  return (
    <div
      className={displayName}
      style={styles.root.base}
    >
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