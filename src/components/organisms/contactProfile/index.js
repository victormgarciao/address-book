import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import cssSides, { Side } from '@team-griffin/css-sides';
import SelectForm from '../../molecules/SelectForm';
import FormInput from '../../molecules/FormImput';
import Form from '../../molecules/Form';
import Button, { Kind } from '../../molecules/Button';
import Input from '../../atoms/Input';
import validator from 'validator';
import { countries } from '../../../api/coutries';
import { theme } from '../../../themes/testTheme';

const displayName = 'ContactProfile';

const computeStyles = () => {
  return {
    root: {
      base: {
        width: '30%',
        padding: 20,
        margin: '0 auto'
      }
    },

    button: {
      base: {
        ...cssSides('padding', Side.X, 10)
      },
      first: {
        paddingLeft: 0
      }
    }
  }
}

const ContactProfile = (props) => {
  const styles = computeStyles();
  const {
      contactId,
      updateContact,
      updateCountry
  } = props;

  return (
    <div
      className={displayName}
      style={styles.root.base}
    >
      <Form
        model='contact'
        onSubmit={(contact) => {
          updateContact(contactId, contact);
          browserHistory.push('/');
        }}
      >
        <FormInput
          label={'First Name'}
          model={'.firstname'}
          validators={{
            required: (val) => !validator.isEmpty(val)
          }}
          errorMessages={{
            required: 'Please provide an first name.',
          }}
          show={(field) => field.touched && !field.focus}
          component={Input}
          theme={theme()}
        />

        <FormInput
          label={'Last Name'}
          model={'.lastname'}
          validators={{
            required: (val) => !validator.isEmpty(val)
          }}
          errorMessages={{
            required: 'Please provide an lastname.',
          }}
          show={(field) => field.touched && !field.focus}
          component={Input}
          theme={theme()}
        />

        <FormInput
          label={'Email'}
          model={'.email'}
          validators={{
            required: (val) => !validator.isEmpty(val),
            valid: (val) => validator.isEmail(val)
          }}
          errorMessages={{
            required: 'Please provide an email.',
            valid: 'It is not a valid email'
          }}
          show={(field) => field.touched && !field.focus}
          component={Input}
          theme={theme()}
        />

        <SelectForm
          label={'Country'}
          model={'.country'}
          validators={{
            required: (val) => !validator.isEmpty(val),
          }}
          errorMessages={{
            required: 'Please select a country.',
          }}
          show={(field) => field.touched && !field.focus}
          options={countries}
          theme={theme()}
          updateCountry={updateCountry}
        />
        <span style={styles.button.first}>
          <Button 
            theme={theme()}
            type={'submit'}
            kind={Kind.PRIMARY}
          >
            <span>Update contact</span>
          </Button>
        </span>
        <span style={styles.button.base}>
          <Link to={'/'}>
            <Button 
              theme={theme()}
              kind={Kind.PRIMARY}
            >
              <span>Contacts</span>
            </Button>
          </Link>
        </span>
      </Form>
    </div>
  );
}

ContactProfile.defaultProps = {
}
ContactProfile.propTypes = {
  contactId: PropTypes.string.isRequired,
  updateContact: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired
}

export default ContactProfile;