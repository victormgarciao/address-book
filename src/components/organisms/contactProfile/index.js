import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import SelectForm from '../../molecules/SelectForm';
import FormInput from '../../molecules/FormImput';
import Form from '../../molecules/Form';
import Button, { Kind } from '../../molecules/Button'
import validator from 'validator';
import { countries } from '../../../api/coutries';
import { theme } from '../../../themes/testTheme'

const displayName = 'ContactProfile'

const ContactProfile = (props) => {

  const {
      contactId,
      updateContact,
  } = props;

  return (
    <div  className={displayName}>
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
        />

        <Button 
          theme={theme()}
          type={'submit'}
          kind={Kind.PRIMARY}
        >
          <span>Update contact</span>
        </Button>
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
  contactId: PropTypes.string.isRequired,
  updateContact: PropTypes.func.isRequired,
}

export default ContactProfile;