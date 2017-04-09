import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import validator from 'validator';
import SelectForm from '../../molecules/SelectForm';
import FormInput from '../../molecules/FormImput';
import Form from '../../molecules/Form';
import Button, { Kind } from '../../molecules/Button';
import { countries } from '../../../api/coutries';
import { theme } from '../../../themes/testTheme';
import Input from '../../atoms/Input'

const displayName = 'NewContact';

const NewContact = (props) => {
  const {
    addContact,
    updateCountry
  } = props;

  return(
    <div className={displayName}>
      <Form
        model={'contact'}
        onSubmit={(contact) => {
            addContact(contact);
            browserHistory.push('/')
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
          countries={countries}
          theme={theme()}
          updateCountry={updateCountry}
        />

        <Button 
          theme={theme()}
          type={'submit'}
          kind={Kind.PRIMARY}
        >
          <span>Add contact</span>
        </Button>
      </Form>
      <Link to='/'>Go to contacts</Link>
    </div>
  )
}

NewContact.defaultProps = {
}
NewContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired

}

export default NewContact;