import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Control, Form, Field, Errors } from 'react-redux-form';
import { countries } from '../../../api/coutries';
import { browserHistory } from 'react-router';
import validator from 'validator';

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
                <label>First Name:</label>
                <Control.text 
                    model='.firstname'
                    validators={{
                        required: (val) => !validator.isEmpty(val)
                    }}
                />
                <Errors
                    model=".firstname"
                    messages={{
                        required: 'Please provide an first name.',
                    }}
                    show={(field) => field.touched && !field.focus}
                />

                <label>Last Name:</label>
                <Control.text 
                    model='.lastname' 
                    validators={{
                        required: (val) => !validator.isEmpty(val)
                    }}
                />
                <Errors
                    model=".lastname"
                    messages={{
                        required: 'Please provide an lastname.',
                    }}
                    show={(field) => field.touched && !field.focus}
                />

                <label>Email:</label>
                <Control.text
                    type='email'
                    model='.email' 
                    validators={{
                        required: (val) => !validator.isEmpty(val),
                        valid: (val) => {
                            return validator.isEmail(val) || validator.isEmpty(val)
                        }
                    }}
                />
                <Errors
                    model=".email"
                    messages={{
                        required: 'Please provide an email.',
                        valid: 'It is not a valid email'
                    }}
                    show={(field) => field.touched && !field.focus}
                />
                
                <label>Country:</label>
                <Field 
                    model='.country'
                    validators={{
                        required: (val) => !validator.isEmpty(val)
                    }}
                >
                    <select>
                        {countries.map((country) => {
                            return(
                                <option 
                                    value={country}
                                    key={country}
                                >
                                    {country}
                                </option>
                            );
                        })}
                    </select>   
                </Field>
                <Errors
                    model=".country"
                    messages={{
                        required: 'Please select a country.',
                    }}
                    show={(field) => field.touched && !field.focus}
                />

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
    contactId: PropTypes.string.isRequired,
    updateContact: PropTypes.func.isRequired,
}

export default ContactProfile;