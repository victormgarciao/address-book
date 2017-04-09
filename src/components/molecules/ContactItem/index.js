import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cssSides, { Side } from '@team-griffin/css-sides';
import Button, { Kind } from '../../molecules/Button';
import { themePropType } from '../../../helpers/propTypes';
import { typography } from '../../../helpers/css';
import { TypographyFace } from '../../../constants/constants';

const displayName = 'ContactsItem';

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
        color: palette.get('grey04'),
        ...cssSides('padding', Side.Y, 5),
        ...cssSides('padding', Side.X, 0),
        ...cssSides('margin', Side.A, 0),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
      },
    },

    item: {
      base:{
        display: 'flex',
        flexBasis: '20%'
      },
      last: {
        justifyContent: 'flex-end'
      }
    },

    button: {
      base: {
        ...cssSides('padding', Side.X, 10)
      },
      last: {
        paddingRight: 0
      }
    }
  };
};

const ContactsItem = (props) => {
  const styles = computeStyles(props);
  const {
    theme,
    contact,
    deleteContact
  } = props;

  return (
    <div
      className={displayName}
      style={styles.root.base}
    >
      <span style={styles.item.base}>
        {contact.firstname}
      </span>
      <span style={styles.item.base}>
        {contact.lastname}
      </span>
      <span style={styles.item.base}>
        {contact.email}
      </span>
      <span style={styles.item.base}>
        {contact.country}
      </span>
      <span 
        style={{
          ...styles.item.base,
          ...styles.item.last
        }}
      >
        <span style={styles.button.base}>
          <Link to={`/contacts/${contact.id}`}>
            <Button theme={theme} kind={Kind.PRIMARY}>
              <span>Edit</span>
            </Button>
          </Link>
        </span>
        <span style={styles.button.last}>
          <Button
            onClick={() => deleteContact(contact.id)}
            className={`${displayName}__delete`}
            theme={theme}
            kind={Kind.DETRIMENTAL}
          >
            <span>Delete</span>
          </Button>
        </span>
      </span>
    </div>
  );
};

ContactsItem.displayName = displayName;
ContactsItem.defaultProps = {
};
ContactsItem.propTypes = {
  theme: themePropType(),
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};
export default ContactsItem;