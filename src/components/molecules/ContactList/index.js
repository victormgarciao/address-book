import React, { PropTypes } from 'react';
import map from 'lodash/map';
import longhand from '@team-griffin/css-longhand';
import cssSides, { Side } from '@team-griffin/css-sides';
import ContactItem from '../ContactItem';
import { themePropType } from '../../../helpers/propTypes';
import { typography } from '../../../helpers/css';
import { TypographyFace } from '../../../constants/constants';

const displayName = 'ContactList';

const computeStyles = (props) => {
  const {
    theme,
  } = props;
  const palette = theme.get('palette');
  const themeTypography = theme.get('typography');

  return {
    root: {
      base: {
        ...typography.text,
        ...typography.face(themeTypography, TypographyFace.CONTENT),
        backgroundColor: '#fff',
      },
    },

    list: {
      base: {
        ...cssSides('padding', Side.A, 0),
      },
    },

    contact: {
      base: {
        ...longhand('borderBottom', {
          color: palette.get('grey12'),
          style: 'solid',
          width: 1,
        }),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...cssSides('padding', Side.Y, 5),
      },

      first: {
        ...longhand('borderTop', {
          color: palette.get('grey12'),
          style: 'solid',
          width: 1,
        }),
      },
    },
  };
};

const renderContacts = (props, styles) => {
  const {
    contacts,
    theme,
    deleteContact
  } = props;

  return map(contacts, (contact, index) => {
    const contactProps = {
      theme,
      contact,
      deleteContact
    };

    return (
      <li
        key={contact.id}
        className={`${displayName}__contact`}
        style={{
          ...styles.contact.base,
          ...(index === 0) && styles.contact.first,
        }}
      >
        <ContactItem
          {...contactProps}
        />
      </li>
    );
  });
}

const ContactList = (props) => {
  const styles = computeStyles(props);
  return (
    <div
      className={displayName}
      style={styles.root.base}
    >
      <ul style={styles.list.base} >
        {renderContacts(props, styles)}
      </ul>
    </div>
  );
};

ContactList.displayName = displayName;
ContactList.defaultProps = {
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  theme: themePropType(),
};

export default ContactList;
